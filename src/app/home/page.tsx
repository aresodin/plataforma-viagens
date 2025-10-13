'use client';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabaseClient';
import { useEffect, useState, ReactNode } from 'react';
import { getPublicPackages } from '../packages/actions';
import Link from 'next/link';
import Image from 'next/image';
import PackageImage from '../../components/PackageImage';

// --- Tipagens ---
type Package = { id: string; [key: string]: any; };
interface UserProfile { id: string; nome_completo?: string; role?: string; }

// --- Card de Navegação Principal ---
const DashboardCard = ({ title, description, icon, colorClass, href }: { title: string; description: string; icon: ReactNode; colorClass: string; href?: string; }) => {
  const router = useRouter();
  const handleClick = () => { if (href) router.push(href); };
  return (
    <div onClick={handleClick} className={`bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group ${href ? 'cursor-pointer' : ''}`}>
      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>{icon}</div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// --- Card da Vitrine de Pacotes ---
const PackageHighlightCard = ({ pkg, index }: { pkg: Package; index: number }) => {
  const localImagePaths = ['/imgs/rio_de_janeiro.jpg', '/imgs/salvador.jpg', '/imgs/amazonia.jpg'];
  return (
    <Link href={`/packages/${pkg.id}`} className="block group rounded-xl transform hover:-translate-y-2 transition-all duration-300 will-change-transform">
      <div className="bg-white h-full flex flex-col rounded-xl shadow-lg">
        <div className="relative h-56 rounded-t-xl overflow-hidden">
          <PackageImage fill sizes="(max-width: 768px) 100vw, 33vw" src={pkg.imagem_url} fallbackSrc={localImagePaths[index % localImagePaths.length]} alt={`Viagem para ${pkg.destino}`} className="object-cover group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <h3 className="text-2xl font-bold text-white">{pkg.destino}</h3>
            <p className="text-sm text-gray-200">Saindo de {pkg.origem}</p>
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">{pkg.descricao || `Descubra as maravilhas de ${pkg.destino}.`}</p>
          <div className="text-right">
            <p className="text-sm text-gray-500">A partir de</p>
            <p className="text-2xl font-bold text-green-600">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(pkg.preco)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

// --- Componente Principal da Página ---
export default function HomePage() {
  const router = useRouter();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [latestPackages, setLatestPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.push('/login'); return; }

      const [profileRes, roleRes, packagesRes] = await Promise.all([
        supabase.from('usuarios').select('nome_completo').eq('id', user.id).maybeSingle(),
        supabase.from('user_roles').select('role').eq('user_id', user.id).maybeSingle(),
        getPublicPackages()
      ]);

      setUserProfile({ id: user.id, nome_completo: profileRes.data?.nome_completo, role: roleRes.data?.role || 'USER' });
      if (packagesRes.packages) {
        setLatestPackages(packagesRes.packages.slice(0, 3));
      }
      setLoading(false);
    };
    fetchInitialData();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800">
      <div className="relative h-96 text-white">
        {/* CORREÇÃO: Removendo as props legadas 'layout' e 'objectFit' e usando 'fill' e 'className' */}
        <Image 
          fill
          src="/imgs/capa_inicial.jpg" 
          alt="Paisagem de Viagem" 
          className="object-cover brightness-50"
          priority // Imagem de destaque, deve carregar primeiro
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-5xl md:text-7xl font-extrabold shadow-2xl">Sua Aventura Começa Aqui!</h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl shadow-2xl">Bem-vindo ao seu painel. Explore, sonhe e descubra seu próximo destino conosco.</p>
        </div>
        <header className="absolute top-0 left-0 right-0 bg-transparent">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push('/home')}>
              <img src="/imgs/travel_1000dp_FFF_FILL0_wght400_GRAD0_opsz48.svg" alt="Jacarelli Viagens Logo" className="h-8 w-8" />
              <span className="text-2xl font-bold">Jacarelli Viagens</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-medium hidden sm:block">Olá, {userProfile?.nome_completo?.split(' ')[0] || 'Viajante'}!</span>
              <button onClick={handleLogout} className="flex items-center gap-2 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-all">Sair</button>
            </div>
          </nav>
        </header>
      </div>

      <main className="container mx-auto px-6 py-12 -mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <DashboardCard title="Pacotes Imperdíveis" description="Descubra nossas ofertas e planeje a viagem dos seus sonhos." colorClass="from-green-400 to-teal-500" href="/packages" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>} />
          <DashboardCard title="Minhas Viagens" description="Acesse seu histórico de compras, reservas e detalhes." colorClass="from-blue-400 to-indigo-500" href="/my-trips" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>} />
          <DashboardCard title="Meu Perfil" description="Atualize seus dados cadastrais, preferências e informações." colorClass="from-purple-400 to-pink-500" href="/profile" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>} />
        </div>

        <section>
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Explore Nossos Destinos</h2>
          {loading ? (
            <p className="text-center text-gray-500">Carregando as melhores viagens...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestPackages.map((pkg, index) => <PackageHighlightCard key={pkg.id} pkg={pkg} index={index} />)}
            </div>
          )}
        </section>

        {userProfile?.role === 'ADMIN' && (
          <div className="mt-12 bg-gray-800 text-white p-10 rounded-xl shadow-2xl text-left">
            <h2 className="text-4xl font-bold mb-4">Área do Administrador</h2>
            <p className="mb-6 opacity-80 max-w-2xl">Acesso exclusivo para gerenciar usuários, cadastrar pacotes e visualizar relatórios.</p>
            <button onClick={() => router.push('/admin')} className="py-3 px-8 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 transition-all">Acessar Painel de Controle</button>
          </div>
        )}
      </main>
    </div>
  );
}
