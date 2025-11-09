
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Este middleware é executado antes de cada pedido ao servidor.
export async function middleware(req: NextRequest) {
  // Cria uma resposta e um cliente Supabase dentro do contexto do middleware.
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  // A função chave: atualiza a sessão do utilizador (o cookie) se estiver expirada.
  // Isto garante que a sessão está sempre fresca e disponível para os componentes de servidor.
  await supabase.auth.getSession();

  return res;
}

// Configuração para especificar em que rotas o middleware deve ser executado.
export const config = {
  matcher: [
    /*
     * Corresponde a todos os caminhos de pedido, exceto para os que começam com:
     * - _next/static (ficheiros estáticos)
     * - _next/image (ficheiros de otimização de imagem)
     * - favicon.ico (ficheiro de favicon)
     * Isto evita que o middleware execute lógica de autenticação desnecessária em recursos estáticos.
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
