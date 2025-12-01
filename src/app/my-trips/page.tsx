import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import Image from 'next/image';
import { redirect } from 'next/navigation';

import amazoniaImg from '../../../public/imgs/amazonia.jpg';

// --- Tipagens Aprimoradas ---
// Adicionado o campo 'status' para permitir a organização e o cálculo de métricas.
type Viagem = {
  id: string;
  destino: string;
  origem: string;
  data_ida: string;
  data_volta: string | null;
};

type Trip = {
  id: string;
  quantidade_passagens: number;
  valor_total: number;
  criado_em: string;
  status: 'confirmada' | 'pendente' | 'cancelada'; // Tipo mais específico para o status
  viagens: Viagem;
};

// --- Busca de Dados (Server-Side) ---
// A função agora busca o 'status' da reserva.
async function getMyTrips(): Promise<Trip[]> {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return [];

  const { data, error } = await supabase
    .from('reservas')
    .select('id, quantidade_passagens, valor_total, criado_em, status, viagens(*)')
    .eq('usuario_id', session.user.id)
    .order('criado_em', { ascending: false });

  if (error) {
    console.error('Error fetching reservations:', error);
    return [];
  }
  return data as Trip[];
}

// --- Funções Auxiliares ---
const formatDate = (dateString: string) => new Date(dateString).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
const formatCurrency = (amount: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(amount);
const getStatusChip = (status: string) => {
    switch (status) {
        case 'confirmada': return 'bg-green-100 text-green-800';
        case 'pendente': return 'bg-yellow-100 text-yellow-800';
        case 'cancelada': return 'bg-red-100 text-red-800';
        default: return 'bg-gray-100 text-gray-800';
    }
};

// --- Subcomponente: TripCard ---
// O card agora recebe o status para exibir o chip correspondente.
const TripCard = ({ trip }: { trip: Trip }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="md:col-span-1 relative h-48 md:h-full">
        <Image src={amazoniaImg} alt={`Viagem para ${trip.viagens.destino}`} fill className="object-cover" placeholder="blur" sizes="(max-width: 768px) 100vw, 33vw" />
        <div className={`absolute top-2 right-2 px-2 py-1 text-xs font-bold rounded-full ${getStatusChip(trip.status)}`}>
          {trip.status}
        </div>
      </div>
      <div className="md:col-span-2 p-6 flex flex-col">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{trip.viagens.destino}</h2>
          <p className="font-medium text-gray-600 mb-4">Saindo de: {trip.viagens.origem}</p>
          <div className="grid grid-cols-2 gap-4 text-sm mb-4">
              <div className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">flight_takeoff</span><span className="font-semibold text-gray-700">Ida: {formatDate(trip.viagens.data_ida)}</span></div>
              {trip.viagens.data_volta && <div className="flex items-center gap-2"><span className="material-symbols-outlined text-red-500 text-lg">flight_land</span><span className="font-semibold text-gray-700">Volta: {formatDate(trip.viagens.data_volta)}</span></div>}
          </div>
        </div>
        <div className="border-t pt-4 mt-4 flex-grow flex flex-col justify-end">
            <div className="flex justify-between items-center">
                <div>
                   <p className="text-gray-600">{trip.quantidade_passagens} passageiro(s)</p>
                   <p className="font-bold text-lg text-gray-800">{formatCurrency(trip.valor_total)}</p>
                </div>
                 <Link href={`/packages/${trip.viagens.id}`} className="py-2 px-5 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors text-sm">Ver Pacote</Link>
            </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Componente Principal da Página (Server Component) ---
export default async function MyTripsPage() {
  const allTrips = await getMyTrips();
  const { data: { session } } = await createRouteHandlerClient({ cookies }).auth.getSession();

  if (!session) redirect('/login');

  // --- Lógica de Cálculo de Métricas ---
  const totalSpent = allTrips.filter(t => t.status === 'confirmada').reduce((acc, trip) => acc + trip.valor_total, 0);
  const favoriteDestination = allTrips.length > 0 
    ? Object.entries(allTrips.reduce((acc, trip) => {
        acc[trip.viagens.destino] = (acc[trip.viagens.destino] || 0) + 1;
        return acc;
      }, {} as Record<string, number>)).sort((a, b) => b[1] - a[1])[0][0]
    : 'Nenhum';

  // --- Separação de Viagens ---
  const upcomingTrips = allTrips.filter(t => t.status === 'confirmada' || t.status === 'pendente');
  const pastTrips = allTrips.filter(t => t.status === 'cancelada'); // Lógica simplificada

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm"><nav className="container mx-auto px-6 py-4 flex justify-between items-center"><Link href="/home" className="flex items-center gap-3"><img src="/imgs/travel_1000dp_FFF_FILL0_wght400_GRAD0_opsz48.svg" alt="Jacarelli Viagens Logo" className="h-8 w-8 bg-green-500 rounded-full p-1" /><span className="text-2xl font-bold text-green-500">Jacarelli Viagens</span></Link><Link href="/packages" className="py-2 px-5 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-colors">Explorar Pacotes</Link></nav></header>
      
      <main className="container mx-auto px-4 py-10">
        {/* Cabeçalho do Perfil */}
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900">Meu Painel</h1>
          <p className="text-lg text-gray-600">Bem-vindo(a) de volta, <span className="font-semibold text-green-600">{session.user.email}</span></p>
        </div>

        {/* Painel de Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg"><h3 className="text-gray-500 font-medium">Viagens Feitas</h3><p className="text-3xl font-bold text-gray-800 mt-1">{allTrips.length}</p></div>
            <div className="bg-white p-6 rounded-xl shadow-lg"><h3 className="text-gray-500 font-medium">Destino Favorito</h3><p className="text-3xl font-bold text-gray-800 mt-1 truncate">{favoriteDestination}</p></div>
            <div className="bg-white p-6 rounded-xl shadow-lg"><h3 className="text-gray-500 font-medium">Total Gasto</h3><p className="text-3xl font-bold text-gray-800 mt-1">{formatCurrency(totalSpent)}</p></div>
        </div>

        {allTrips.length > 0 ? (
          <div className="space-y-12">
            {/* Seção de Próximas Viagens */}
            {upcomingTrips.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Suas Próximas Viagens</h2>
                <div className="space-y-6">{upcomingTrips.map((trip) => <TripCard key={trip.id} trip={trip} />)}</div>
              </div>
            )}
            {/* Seção de Viagens Passadas */}
            {pastTrips.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Viagens Passadas</h2>
                <div className="space-y-6">{pastTrips.map((trip) => <TripCard key={trip.id} trip={trip} />)}</div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center bg-white p-12 rounded-xl shadow-2xl max-w-2xl mx-auto"><span className="material-symbols-outlined text-6xl text-blue-500">luggage</span><h2 className="text-3xl font-bold text-gray-800 mb-4">Nenhuma viagem encontrada</h2><p className="text-lg text-gray-600 mb-8">Você ainda não tem nenhuma viagem reservada.</p><Link href="/packages" className="py-3 px-8 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 transition-all">Explorar Pacotes</Link></div>
        )}
      </main>
    </div>
  );
}