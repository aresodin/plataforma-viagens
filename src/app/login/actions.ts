'use server';

import { createServerActionClient } from '@supabase/auth-helpers-nextjs'; // Corrigido
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function logout() {
  const cookieStore = cookies();
  const supabase = createServerActionClient({ cookies: () => cookieStore }); // Corrigido

  // Termina a sessão do usuário
  await supabase.auth.signOut();

  // Redireciona para a página de login após o logout
  return redirect('/login');
}
