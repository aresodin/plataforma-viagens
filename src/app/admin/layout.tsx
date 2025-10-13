'use client';
import { useRouter, usePathname } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { href: '/admin', label: 'Gerenciar Usuários' },
    { href: '/admin/packages', label: 'Gerenciar Pacotes' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h1 className="text-2xl font-bold text-gray-800">Painel de Administração</h1>
          </div>
          <button
            onClick={() => router.push('/home')}
            className="flex items-center gap-2 py-2 px-4 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-sm hover:bg-gray-300 transition-all duration-300 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Voltar para a Home
          </button>
        </nav>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => router.push(link.href)}
                className={`py-4 px-1 font-medium text-lg transition-colors duration-300
                  ${pathname === link.href
                    ? 'border-b-2 border-green-500 text-green-600'
                    // @ts-ignore
                    : 'text-gray-500 hover:text-green-600'
                  }
                `}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
        
        {/* O conteúdo da página (usuários ou pacotes) será renderizado aqui */}
        <main>{children}</main>
      </div>
    </div>
  );
}
