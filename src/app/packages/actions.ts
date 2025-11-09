'use server';

import { createClient } from '@supabase/supabase-js';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';

// Tipagem para o estado do formulário, usada pelo hook useActionState.
// Define a estrutura do objeto de retorno da Server Action.
type ReservationState = {
  message: string;
  errors?: Record<string, string> | null;
  success: boolean;
};

// --- Funções de busca de pacotes (Acesso Público) ---

// Helper para criar um cliente Supabase para acesso público (anônimo).
const createSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Credenciais do Supabase não encontradas no ambiente.');
  }
  // Usa o createClient padrão pois não precisa de contexto de usuário/sessão.
  return createClient(supabaseUrl, supabaseAnonKey);
};

/**
 * @description Busca todos os pacotes de viagem que estão marcados como 'ativos'.
 * Esta função é pública e não requer autenticação de usuário.
 * @returns Um objeto contendo uma lista de pacotes.
 */
export async function getPublicPackages() {
  try {
    const supabase = createSupabaseClient();
    const { data, error } = await supabase
      .from('viagens')
      .select('*')
      .eq('ativo', true)
      .order('destino', { ascending: true });

    if (error) {
        console.error("Erro ao buscar pacotes públicos:", error);
        throw new Error("Não foi possível carregar os pacotes.");
    }
    
    return { packages: data };

  } catch (error) {
    console.error("Catch: Erro ao buscar pacotes públicos:", error);
    return { packages: [] };
  }
}

/**
 * @description Busca um pacote de viagem específico pelo seu ID. Função pública.
 * @param id O UUID do pacote a ser buscado.
 * @returns Um objeto contendo os dados do pacote (pkg) ou um erro.
 */
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

// --- Server Action para Reserva (Acesso Autenticado) ---

// Validação do CPF: usa Zod para remover caracteres não numéricos e garantir que tenha 11 dígitos.
const cpfSchema = z.string().transform(cpf => cpf.replace(/\D/g, '')).pipe(
  z.string().length(11, { message: "CPF deve conter 11 dígitos." })
);

// Schema de validação principal com Zod para os dados do formulário de reserva.
const CreateReservationSchema = z.object({
  packageId: z.string().uuid({ message: 'ID do pacote inválido.' }),
  numTravelers: z.coerce.number().int().min(1, { message: 'É necessário pelo menos 1 viajante.' }),
  passengers: z.array(z.object({
    name: z.string().min(3, { message: 'O nome deve ter pelo menos 3 caracteres.' }),
    cpf: cpfSchema,
  })).min(1, { message: 'É necessário adicionar pelo menos um passageiro.' }),
  installments: z.coerce.number().int().min(1).max(12),
  card_last_digits: z.string().length(4, "Os 4 dígitos finais do cartão são obrigatórios."),
});

// Define a taxa de juros com base no número de parcelas.
const getInterestRate = (installments: number) => {
    if (installments <= 3) return 0;      // Sem juros para até 3x
    if (installments <= 6) return 0.05;   // 5% de juros para 4x a 6x
    if (installments <= 9) return 0.07;   // 7% de juros para 7x a 9x
    return 0.10;                          // 10% de juros para 10x a 12x
};

/**
 * @description Server Action para processar a reserva de uma viagem. Executa 100% no servidor.
 * Realiza validação, verifica autenticação, disponibilidade, calcula totais, e insere os dados no banco.
 * @param prevState O estado anterior do formulário (injetado pelo hook useActionState).
 * @param formData Os dados crus enviados pelo formulário (`FormData`).
 * @returns Um objeto com status de sucesso ou falha, mensagens e erros para a UI.
 */
export async function submitReservation(prevState: ReservationState, formData: FormData): Promise<ReservationState> {
    // Cria um cliente Supabase que tem acesso ao contexto da requisição (cookies).
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

    try {
        // 1. VERIFICAR AUTENTICAÇÃO: Garante que um usuário está logado.
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            return { message: 'Acesso negado. Por favor, faça login para continuar.', success: false };
        }

        // 2. EXTRAIR DADOS DO FORMDATA: Constrói o array de passageiros dinamicamente.
        const passengers = [];
        let i = 0;
        while(formData.get(`passengers[${i}][name]`)) {
            passengers.push({
                name: formData.get(`passengers[${i}][name]`) as string,
                cpf: formData.get(`passengers[${i}][cpf]`) as string,
            });
            i++;
        }

        const dataToValidate = {
          packageId: formData.get('packageId'),
          numTravelers: formData.get('numTravelers'),
          passengers: passengers,
          installments: formData.get('installments'),
          card_last_digits: formData.get('card_last_digits'),
        };

        // 3. VALIDAR OS DADOS com Zod: Garante a integridade e formato dos dados.
        const validatedFields = CreateReservationSchema.safeParse(dataToValidate);
        if (!validatedFields.success) {
            // Formata os erros de validação para serem exibidos facilmente na UI.
            const flattenedErrors: Record<string, string> = {};
            for (const issue of validatedFields.error.issues) {
                flattenedErrors[issue.path.join('.')] = issue.message;
            }
            return {
                message: 'Erro de validação. Verifique os campos em vermelho.',
                errors: flattenedErrors,
                success: false,
            };
        }

        const { packageId, numTravelers, installments, card_last_digits } = validatedFields.data;
        
        // 4. VERIFICAR DISPONIBILIDADE DO PACOTE
        const { data: travelPackage, error: packageError } = await supabase
            .from('viagens')
            .select('preco, disponibilidade')
            .eq('id', packageId)
            .single(); // .single() garante que apenas um registro é retornado.

        if (packageError || !travelPackage) {
            return { message: "Pacote de viagem não encontrado ou indisponível.", success: false };
        }

        if (travelPackage.disponibilidade < numTravelers) {
            return { message: `Desculpe, restam apenas ${travelPackage.disponibilidade} vagas para este destino.`, success: false };
        }

        // 5. CALCULAR VALOR TOTAL COM JUROS
        const baseTotal = travelPackage.preco * numTravelers;
        const interestRate = getInterestRate(installments);
        const finalTotal = baseTotal * (1 + interestRate);

        // ETAPAS DA TRANSAÇÃO NO BANCO DE DADOS

        // 6. INSERIR A RESERVA com status inicial 'pendente'
        const { data: reservation, error: reservationError } = await supabase
            .from('reservas')
            .insert({ usuario_id: user.id, viagem_id: packageId, quantidade_passagens: numTravelers, valor_total: finalTotal, status: 'pendente' })
            .select('id').single();
        
        if (reservationError || !reservation) {
            return { message: 'Falha ao iniciar o processo de reserva.', success: false };
        }

        // 7. INSERIR O PAGAMENTO associado à reserva
        const { error: paymentError } = await supabase
            .from('pagamentos')
            .insert({ reserva_id: reservation.id, valor: finalTotal, metodo: `Cartão de Crédito final ${card_last_digits}`, status: 'aprovado' });

        if (paymentError) { return { message: 'Falha ao processar o pagamento.', success: false }; }
        
        // 8. ATUALIZAR STATUS DA RESERVA para 'confirmada'
        const { error: updateStatusError } = await supabase.from('reservas').update({ status: 'confirmada' }).eq('id', reservation.id);

        if (updateStatusError) { return { message: 'Falha ao confirmar o status da reserva.', success: false }; }

        // 9. ATUALIZAR A DISPONIBILIDADE de vagas do pacote de viagem
        const newAvailability = travelPackage.disponibilidade - numTravelers;
        await supabase.from('viagens').update({ disponibilidade: newAvailability }).eq('id', packageId);

        // 10. REVALIDAR CACHE: Invalida o cache de dados para certas páginas.
        // Isso força o Next.js a buscar os dados novamente na próxima visita, mostrando informações atualizadas.
        revalidatePath(`/packages/${packageId}`); // Atualiza a página de detalhes do pacote (mostra novas vagas).
        revalidatePath('/my-trips'); // Garante que a nova viagem apareça na lista de "Minhas Viagens".

        return {
            message: `Sua reserva para ${numTravelers} pessoa(s) foi confirmada com sucesso!`,
            success: true,
        };

    } catch (e: any) {
        console.error("Erro inesperado no processamento da reserva:", e);
        return {
            message: e.message || 'Ocorreu um erro inesperado no servidor. Tente novamente mais tarde.',
            success: false,
        };
    }
}
