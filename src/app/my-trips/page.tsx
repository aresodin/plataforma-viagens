'use client';
import { useRouter } from 'next/navigation';

export default function MyTripsPage() {
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
          <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto text-blue-500 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Minhas Viagens</h1>
          <p className="text-lg text-gray-600 mb-8">
            Esta área está em construção! Em breve, você poderá ver todo o seu histórico de viagens, reservas e detalhes dos seus pacotes aqui.
          </p>
          <button 
            onClick={() => router.push('/packages')}
            className="py-3 px-8 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Explorar Pacotes
          </button>
        </div>
      </main>
    </div>
  );
}
