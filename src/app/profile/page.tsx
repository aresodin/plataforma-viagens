'use client';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800">
      {/* Cabeçalho Consistente */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => router.push('/home')}
          >
            <img src="/imgs/travel_1000dp_FFF_FILL0_wght400_GRAD0_opsz48.svg" alt="Jacarelli Viagens Logo" className="h-8 w-8 bg-green-500 rounded-full p-1" />
            <span className="text-2xl font-bold text-green-500">Jacarelli Viagens</span>
          </div>
          <button
            onClick={() => router.push('/home')}
            className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-colors"
          >
            Voltar ao Painel
          </button>
        </nav>
      </header>

      {/* Conteúdo da Página */}
      <main className="container mx-auto px-6 py-20 text-center">
        <div className="bg-white p-12 rounded-xl shadow-2xl max-w-2xl mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto text-purple-500 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Meu Perfil</h1>
          <p className="text-lg text-gray-600 mb-8">
            Página em desenvolvimento. Em breve, você poderá visualizar e editar seus dados cadastrais, preferências de viagem e informações de contato diretamente aqui.
          </p>
          <button 
            onClick={() => router.push('/home')}
            className="py-3 px-8 bg-gray-800 text-white font-bold rounded-lg shadow-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </main>
    </div>
  );
}
