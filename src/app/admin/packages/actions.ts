'use server';

import { createClient } from '@supabase/supabase-js';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

// CORREÇÃO: O esquema para a URL da imagem foi ajustado.
// .url() - Garante que, se uma string for fornecida, ela DEVE ser uma URL válida.
// .or(z.literal('')) - Permite que a string seja vazia.
// .nullable().optional() - Permite que o campo seja nulo ou não definido.
// Isso cobre todos os casos: URL válida, string vazia, ou ausência do campo.
const PackageSchema = z.object({
  id: z.string().optional(),
  origem: z.string().min(1, "Origem é obrigatória."),
  destino: z.string().min(1, "Destino é obrigatório."),
  data_ida: z.string().min(1, "Data de ida é obrigatória."),
  data_volta: z.string().nullable().optional(),
  meio_transporte: z.string(),
  companhia: z.string().nullable().optional(),
  preco: z.coerce.number().positive("O preço deve ser positivo."),
  disponibilidade: z.coerce.number().int().min(0, "A disponibilidade não pode ser negativa."),
  descricao: z.string().nullable().optional(),
  imagem_url: z.string().url("URL da imagem inválida.").or(z.literal('')).nullable().optional(),
  categoria: z.string().nullable().optional(),
  ativo: z.boolean(),
});

type PackageFormData = z.infer<typeof PackageSchema>;

const createAdminClient = () => {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_KEY) {
    throw new Error('Variáveis de ambiente do Supabase não configuradas.');
  }
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_KEY
  );
};


export async function getPackageById(id: string) {
  if (!id) return { error: { message: 'ID do pacote não fornecido.' } };
  const supabaseAdmin = createAdminClient();
  const { data, error } = await supabaseAdmin.from('viagens').select('*').eq('id', id).single();
  if (error) {
    console.error(`Erro ao buscar pacote com ID ${id}:`, error.message);
    return { error };
  }
  return { pkg: data };
}


export async function getPackages() {
  const supabaseAdmin = createAdminClient();
  const { data, error } = await supabaseAdmin.from('viagens').select('*').order('criado_em', { ascending: false });
  if (error) {
    console.error('Erro ao buscar pacotes:', error.message);
    return { error };
  }
  return { packages: data };
}


export async function createPackage(pkgData: PackageFormData) {
  const validated = PackageSchema.safeParse(pkgData);
  if (!validated.success) {
    // Adicionando um log para ver os erros de validação no servidor
    console.error("Erro de validação ao criar pacote:", validated.error.flatten());
    return { error: { message: validated.error.flatten().fieldErrors }};
  }
  
  const supabaseAdmin = createAdminClient();
  // Se a imagem_url for uma string vazia, converte para null antes de inserir
  const dataToInsert = {
    ...validated.data,
    imagem_url: validated.data.imagem_url || null,
  };

  const { error } = await supabaseAdmin.from('viagens').insert(dataToInsert);
  
  if (error) {
    console.error("Erro do Supabase ao criar pacote:", error.message);
    return { error };
  }

  revalidatePath('/admin/packages');
  return { success: true };
}


export async function updatePackage(pkgData: PackageFormData) {
  const validated = PackageSchema.safeParse(pkgData);
  if (!validated.success || !validated.data.id) {
    return { error: { message: validated.success ? "ID do pacote é necessário." : validated.error.flatten().fieldErrors }};
  }

  const { id, ...updateData } = validated.data;
  
  const dataToUpdate = {
    ...updateData,
    imagem_url: updateData.imagem_url || null,
  };
  
  const supabaseAdmin = createAdminClient();
  const { error } = await supabaseAdmin.from('viagens').update(dataToUpdate).eq('id', id);

  if (error) {
    console.error("Erro do Supabase ao atualizar pacote:", error.message);
    return { error };
  }

  revalidatePath('/admin/packages');
  revalidatePath(`/packages/${id}`);
  return { success: true };
}


export async function deletePackage(packageId: string) {
  if (!packageId) return { error: { message: "ID do pacote é necessário." } };
  const supabaseAdmin = createAdminClient();
  const { error } = await supabaseAdmin.from('viagens').delete().eq('id', packageId);
  if (error) {
    console.error("Erro do Supabase ao deletar pacote:", error.message);
    return { error };
  }
  revalidatePath('/admin/packages');
  return { success: true };
}
