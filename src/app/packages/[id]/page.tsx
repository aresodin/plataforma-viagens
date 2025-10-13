import { getPublicPackageById } from '../actions'; 
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ReservationForm from './ReservationForm';
import PackageImage from '../../../components/PackageImage';

import FallbackImage from '../../../../public/imgs/rio_de_janeiro.jpg';

type Package = {
  id: string;
  destino: string;
  origem: string;
  data_ida: string;
  data_volta: string | null;
  preco: number;
  descricao: string | null;
  meio_transporte: string;
  companhia: string | null;
  disponibilidade: number;
  imagem_url: string | null;
  categoria: string | null;
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('pt-BR', {
    day: '2-digit', month: 'long', year: 'numeric',
  });
};

// CORREÇÃO: Restaurando o conteúdo correto do componente que foi apagado.
const DetailIcon = ({ children, label }: { children: React.ReactNode; label: string }) => (
  <div className="flex items-center gap-3 text-gray-700">
    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-green-100 text-green-600 rounded-full">
      {children}
    </div>
    <span className="font-medium">{label}</span>
  </div>
);

export default async function PackageDetailsPage({ params }: { params: { id: string } }) {
  const { pkg, error } = await getPublicPackageById(params.id);

  if (error || !pkg) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-40">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/home" className="flex items-center gap-3">
            <img src="/imgs/travel_1000dp_FFF_FILL0_wght400_GRAD0_opsz48.svg" alt="Jacarelli Viagens Logo" className="h-8 w-8 bg-green-500 rounded-full p-1" />
            <span className="text-2xl font-bold text-green-500">Jacarelli Viagens</span>
          </Link>
          <Link href="/packages" className="py-2 px-5 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-colors">
            Ver Todos os Pacotes
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-xl">
          <div className="overflow-hidden rounded-t-2xl">
            <div className="relative h-64 md:h-96 w-full">
              <PackageImage
                fill
                sizes="100vw"
                src={pkg.imagem_url}
                fallbackSrc={FallbackImage}
                alt={`Viagem para ${pkg.destino}`}
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white shadow-2xl">{pkg.destino}</h1>
                <p className="text-xl text-green-300 font-semibold">Saindo de {pkg.origem}</p>
              </div>
            </div>

            <div className="p-8 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-green-500 pl-4">Sobre o Pacote</h2>
                  <p className="text-gray-700 leading-relaxed text-base whitespace-pre-line">
                    {pkg.descricao || 'Detalhes sobre este pacote incrível serão adicionados em breve.'}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-6 border-l-4 border-green-500 pl-4">Informações da Viagem</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <DetailIcon label={`Ida: ${formatDate(pkg.data_ida)}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </DetailIcon>
                    {pkg.data_volta && (
                      <DetailIcon label={`Volta: ${formatDate(pkg.data_volta)}`}>
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      </DetailIcon>
                    )}
                    <DetailIcon label={pkg.meio_transporte}> 
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                    </DetailIcon>
                    {pkg.companhia && <DetailIcon label={pkg.companhia}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" /></svg></DetailIcon>}
                  </div>
                </div>
              </div>

              <aside className="lg:col-span-1 lg:border-l lg:pl-8 space-y-6">
                <div className="bg-slate-100 p-6 rounded-xl shadow-inner">
                  <p className="text-lg text-gray-600">A partir de</p>
                  <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 whitespace-nowrap">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(pkg.preco)}
                  </p>
                  <p className="text-sm text-gray-600 mb-6">por pessoa, taxas inclusas.</p>
                  
                  <ReservationForm packageId={pkg.id} availability={pkg.disponibilidade} />

                  <p className="text-center mt-4 text-sm font-medium text-green-700">
                    {pkg.disponibilidade > 0 ? `Restam apenas ${pkg.disponibilidade} vagas!` : 'Fique de olho para futuras datas!'}
                  </p>
                </div>
                {pkg.categoria && (
                  <div className="text-center">
                      <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-3 py-1 rounded-full">{pkg.categoria}</span>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
