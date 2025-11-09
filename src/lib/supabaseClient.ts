import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// A função correta para o lado do cliente no App Router é `createPagesBrowserClient`.
// Isso garante que o gerenciamento de cookies de sessão seja compatível com o servidor.
export const supabase = createPagesBrowserClient({
  supabaseUrl,
  supabaseKey: supabaseAnonKey,
});
