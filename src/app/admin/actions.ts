'use server';

import { createClient } from '@supabase/supabase-js';
import { revalidatePath } from 'next/cache';

// Esta função cria um cliente Supabase com permissões de administrador.
// Ela USA variáveis de ambiente e SÓ DEVE rodar no servidor.
const createAdminClient = () => {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_KEY) {
    throw new Error('Variáveis de ambiente do Supabase não configuradas.');
  }
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_KEY,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
};

// Ação para buscar todos os usuários e suas permissões
export async function getUsers() {
  const supabaseAdmin = createAdminClient();

  const { data: { users: authUsers }, error: authError } = await supabaseAdmin.auth.admin.listUsers();
  if (authError) {
    console.error("Erro ao buscar usuários:", authError);
    return { error: authError };
  }

  const { data: roles, error: rolesError } = await supabaseAdmin
    .from('user_roles')
    .select('user_id, role');
  if (rolesError) {
    console.error("Erro ao buscar permissões:", rolesError);
    return { error: rolesError };
  }

  const rolesMap = new Map(roles.map(r => [r.user_id, r.role]));

  const combinedUsers = authUsers.map(user => ({
    id: user.id,
    email: user.email,
    role: rolesMap.get(user.id) || 'USER',
  }));

  return { users: combinedUsers };
}

// Ação para definir a permissão de um usuário
export async function updateUserRole(targetUserId: string, newRole: 'ADMIN' | 'USER') {
  const supabaseAdmin = createAdminClient();
  
  const { data, error } = await supabaseAdmin
    .from('user_roles')
    .upsert({ user_id: targetUserId, role: newRole }, { onConflict: 'user_id' })
    .select();
    
  if (error) {
    console.error("Erro ao atualizar permissão:", error);
    return { error };
  }

  // Limpa o cache da página de admin para que os dados sejam recarregados
  revalidatePath('/admin');
  return { success: true };
}
