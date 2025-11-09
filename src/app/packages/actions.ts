'use server';

import { createClient } from '@supabase/supabase-js';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const createSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Credenciais do Supabase não encontradas.');
  }
  return createClient(supabaseUrl, supabaseAnonKey);
};

export async function getPublicPackages() {
  try {
    const supabase = createSupabaseClient();
    const { data, error } = await supabase
      .from('viagens')
      .select('*')
      .eq('ativo', true)
      .order('destino', { ascending: true });
    if (error) throw error;
    return { packages: data };
  } catch (error) {
    console.error("Erro ao buscar pacotes públicos:", error);
    return { error: "Não foi possível carregar os pacotes." };
  }
}

export async function getPublicPackageById(id: string) {
  try {
    const supabase = createSupabaseClient();
    const { data, error } = await supabase.from('viagens').select('*').eq('id', id).limit(1);
    if (error) throw error;
    if (!data || data.length === 0) {
        return { pkg: null, error: `Pacote com ID ${id} não encontrado.` };
    }
    return { pkg: data[0] };
  } catch (e) {
    console.error(`Erro ao buscar pacote por ID ${id}:`, e);
    return { pkg: null, error: "Falha ao buscar dados do pacote." };
  }
}

const CreateReservationSchema = z.object({
  packageId: z.string().uuid({ message: 'ID do pacote inválido.' }),
  numTravelers: z.coerce.number().int().min(1, { message: 'É necessário pelo menos 1 viajante.' }),
  passengers: z.array(z.object({
    name: z.string().min(3, { message: 'O nome do passageiro deve ter pelo menos 3 caracteres.' }),
    cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: 'CPF inválido. Use o formato XXX.XXX.XXX-XX.' }),
  })).min(1, { message: 'É necessário adicionar pelo menos um passageiro.' }),

  installments: z.coerce.number().int().min(1, "Selecione o número de parcelas.").max(12),
  'card-number': z.string().length(16, "Número do cartão deve ter 16 dígitos."),
  'card-name': z.string().min(3, "O nome no cartão é obrigatório."),
  'card-expiry': z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "A data de validade é inválida (MM/AA)."),
  'card-cvv': z.string().min(3, "O CVV deve ter entre 3 e 4 dígitos.").max(4),
  card_last_digits: z.string().length(4, "Os dígitos finais do cartão são inválidos."),
});

export async function submitReservation(prevState: any, formData: FormData) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        return { message: 'Acesso negado. Por favor, faça login para continuar.', errors: {}, success: false };
    }
    
    const passengers = [];
    let i = 0;
    while (formData.has(`passengers[${i}][name]`)) {
        passengers.push({
            name: formData.get(`passengers[${i}][name]`),
            cpf: formData.get(`passengers[${i}][cpf]`),
        });
        i++;
    }

    const dataToValidate = {
      packageId: formData.get('packageId'),
      numTravelers: formData.get('numTravelers'),
      passengers: passengers,
      installments: formData.get('installments'),
      'card-number': formData.get('card-number'),
      'card-name': formData.get('card-name'),
      'card-expiry': formData.get('card-expiry'),
      'card-cvv': formData.get('card-cvv'),
      card_last_digits: formData.get('card_last_digits'),
    };

    const validatedFields = CreateReservationSchema.safeParse(dataToValidate);

    if (!validatedFields.success) {
        const flattenedErrors = {};
        for (const issue of validatedFields.error.issues) {
            flattenedErrors[issue.path.join('.')] = issue.message;
        }
        return { message: 'Falha na validação. Verifique os campos do formulário.', errors: flattenedErrors, success: false };
    }
    
    const { packageId, numTravelers, installments, card_last_digits } = validatedFields.data;

    try {
        const { data: travelPackage, error: packageError } = await supabase
            .from('viagens')
            .select('preco, disponibilidade')
            .eq('id', packageId)
            .single();

        if (packageError || !travelPackage) {
            return { message: "Pacote de viagem não encontrado.", success: false, errors: {} };
        }

        if (travelPackage.disponibilidade < numTravelers) {
            return { message: `Desculpe, restam apenas ${travelPackage.disponibilidade} vagas.`, success: false, errors: {} };
        }

        const baseTotal = travelPackage.preco * numTravelers;
        const finalTotal = installments > 3 ? baseTotal * 1.05 : baseTotal;

        const { data: reservation, error: reservationError } = await supabase
            .from('reservas')
            .insert({
                usuario_id: user.id,
                viagem_id: packageId,
                quantidade_passagens: numTravelers,
                valor_total: finalTotal,
                status: 'pendente',
                metodo_pagamento: 'Cartão de Crédito'
            })
            .select('id')
            .single();
        
        if (reservationError || !reservation) {
            throw new Error('Não foi possível criar o registro da reserva.');
        }

        const { error: paymentError } = await supabase
            .from('pagamentos')
            .insert({
                reserva_id: reservation.id,
                valor: finalTotal,
                metodo: `Cartão de Crédito final ${card_last_digits}`,
                status: 'aprovado',
                parcelas: installments,
            });

        if (paymentError) {
            throw new Error('Falha ao registrar o pagamento.');
        }
        
        const { error: updateStatusError } = await supabase
            .from('reservas')
            .update({ status: 'confirmada' })
            .eq('id', reservation.id);

        if (updateStatusError) {
            throw new Error('Falha ao confirmar o status da reserva.');
        }

        const newAvailability = travelPackage.disponibilidade - numTravelers;
        const { error: updateAvailabilityError } = await supabase
            .from('viagens')
            .update({ disponibilidade: newAvailability })
            .eq('id', packageId);
        
        if (updateAvailabilityError) {
            console.error(`CRÍTICO: Falha ao atualizar disponibilidade do pacote ${packageId}.`);
        }

        revalidatePath(`/packages/${packageId}`);
        revalidatePath('/my-trips');

        return {
            message: `Sua reserva para ${numTravelers} pessoa(s) foi confirmada com sucesso!`,
            errors: {},
            success: true,
        };

    } catch (e) {
        console.error("Erro no processamento da reserva:", e.message);
        return {
            message: e.message || 'Ocorreu um erro inesperado no servidor. Tente novamente.',
            errors: {},
            success: false,
        };
    }
}
