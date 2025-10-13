'use server';

import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';

// --- CLIENTE SUPABASE (PÚBLICO) ---
const createSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Credenciais do Supabase não encontradas. Verifique as variáveis de ambiente.');
  }
  
  return createClient(supabaseUrl, supabaseAnonKey);
};

// --- AÇÕES DE BUSCA DE DADOS ---

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

    // Usando .limit(1) para contornar um possível bug no .single()
    const { data, error } = await supabase
      .from('viagens')
      .select('*')
      .eq('id', id)
      .limit(1);

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


// --- AÇÕES DE FORMULÁRIO (MUTATIONS) ---

const ReservationSchema = z.object({
  name: z.string().min(3, { message: 'O nome deve ter pelo menos 3 caracteres.' }),
  email: z.string().email({ message: 'Por favor, insira um email válido.' }),
});

export async function submitReservation(prevState: any, formData: FormData) {
  try {
    const validatedFields = ReservationSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
    });

    if (!validatedFields.success) {
      return {
        message: 'Falha na validação. Por favor, verifique os campos.',
        errors: validatedFields.error.flatten().fieldErrors,
        success: false,
      };
    }

    // Simulação de salvamento no banco de dados
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      message: `Reserva confirmada para ${validatedFields.data.name}! Entraremos em contato em breve.`,
      errors: { name: [], email: [] },
      success: true,
    };
  } catch (e) {
    console.error("Erro ao submeter reserva:", e);
    return {
      message: 'Não foi possível processar a reserva.',
      errors: { name: [], email: [] },
      success: false,
    };
  }
}
