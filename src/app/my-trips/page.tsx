import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import Image from 'next/image';
import { redirect } from 'next/navigation';

import FallbackImage from '../../../public/imgs/rio_de_janeiro.jpg';

async function getMyTrips() {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    // Se não houver sessão, não podemos buscar as viagens
    return [];
  }

  const { data: reservations, error } = await supabase
    .from('reservas')
    .select(`
      id,
      quantidade_passagens,
      valor_total,
      criado_em,
      viagens (*)
    `)
    .eq('usuario_id', session.user.id)
    .eq('status', 'confirmada')
    .order('criado_em', { ascending: false });

  if (error) {
    console.error('Error fetching reservations:', error);
    return [];
  }

  return reservations;
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('pt-BR', {
    day: '2-digit', month: 'short', year: 'numeric',
  });
};

export default async function MyTripsPage() {
  const trips = await getMyTrips();
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/home" className="flex items-center gap-3">
            <img src="/imgs/travel_1000dp_FFF_FILL0_wght400_GRAD0_opsz48.svg" alt="Jacarelli Viagens Logo" className="h-8 w-8 bg-green-500 rounded-full p-1" />
            <span className="text-2xl font-bold text-green-500">Jacarelli Viagens</span>
          </Link>
          <Link href="/packages" className="py-2 px-5 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-colors">
            Explorar Pacotes
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Minhas Viagens</h1>
          <p className="text-lg text-gray-600">Seu histórico de aventuras com a Jacarelli Viagens.</p>
        </div>

        {trips.length > 0 ? (
          <div className="space-y-6">
            {trips.map((trip) => (
              <div key={trip.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="md:col-span-1 relative h-48 md:h-full">
                     <Image 
                        src={trip.viagens.imagem_url || FallbackImage}
                        alt={`Viagem para ${trip.viagens.destino}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                     />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{trip.viagens.destino}</h2>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-gray-600 mb-4">
                      <span className="font-medium">Saindo de: {trip.viagens.origem}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                        <div className="flex items-center gap-2">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                           <span className="font-semibold">Ida: {formatDate(trip.viagens.data_ida)}</span>
                        </div>
                        {trip.viagens.data_volta && 
                          <div className="flex items-center gap-2">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                             <span className="font-semibold">Volta: {formatDate(trip.viagens.data_volta)}</span>
                          </div>
                        }
                    </div>
                    <div className="border-t pt-4 mt-4 flex justify-between items-center">
                        <div>
                           <p className="text-gray-600">{trip.quantidade_passagens} passageiro(s)</p>
                           <p className="font-bold text-lg text-gray-800">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(trip.valor_total)}</p>
                        </div>
                         <Link href={`/packages/${trip.viagens.id}`} className="py-2 px-5 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors text-sm">
                            Ver Detalhes do Pacote
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center bg-white p-12 rounded-xl shadow-2xl max-w-2xl mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto text-blue-500 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nenhuma viagem encontrada</h2>
            <p className="text-lg text-gray-600 mb-8">Você ainda não tem nenhuma viagem reservada. Que tal começar uma nova aventura?</p>
            <Link href="/packages" className="py-3 px-8 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              Explorar Pacotes
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
