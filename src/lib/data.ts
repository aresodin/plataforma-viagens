// Este arquivo é dedicado a funções de busca de dados que rodam no servidor.
// Elas são chamadas por Server Components e NÃO usam a diretiva "use server".
// Isso as separa das "Server Actions", que são para mutações de formulário.

import { createClient } from '@supabase/supabase-js';

const createSupabaseClient = () => {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error('Variáveis de ambiente públicas do Supabase não configuradas.');
  }
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
};

/**
 * Busca e retorna todos os pacotes de viagem ATIVOS para exibição pública.
 */
export async function getPublicPackages() {
  const supabase = createSupabaseClient();
  try {
    const { data, error } = await supabase
      .from('viagens')
      .select('*')
      .eq('ativo', true)
      .order('destino', { ascending: true });

    if (error) throw error;

    return { packages: data };
  } catch (error) {
    console.error("Error fetching public packages:", error);
    return { error: { message: "Não foi possível carregar os pacotes." } };
  }
}

/**
 * Busca e retorna um único pacote de viagem pelo seu ID para exibição pública.
 */
export async function getPublicPackageById(id: string) {
  const supabase = createSupabaseClient();
  try {
    const { data, error } = await supabase
      .from('viagens')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;

    return { pkg: data };
  } catch (error) {
    console.error(`Error fetching public package by id ${id}:`, error);
    return { error: { message: "Não foi possível carregar o pacote." } };
  }
}
