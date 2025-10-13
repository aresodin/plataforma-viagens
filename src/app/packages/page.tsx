'use client';

import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { getPublicPackages } from './actions';
import PackageImage from '../../components/PackageImage';
import FilterSidebar, { Filters } from './FilterSidebar';

// Tipagem
type Package = { id: string; [key: string]: any; };

// Card de Pacote (sem alterações)
const PackageCard = ({ pkg, index }: { pkg: Package; index: number }) => {
  const localImagePaths = ['/imgs/rio_de_janeiro.jpg', '/imgs/salvador.jpg', '/imgs/amazonia.jpg'];
  return (
    <Link href={`/packages/${pkg.id}`} className="block group rounded-xl transform hover:-translate-y-2 transition-all duration-300 will-change-transform">
      <div className="bg-white h-full flex flex-col rounded-xl shadow-lg">
        <div className="relative h-56 rounded-t-xl overflow-hidden">
          <PackageImage fill sizes="(max-width: 768px) 100vw, 33vw" src={pkg.imagem_url} fallbackSrc={localImagePaths[index % localImagePaths.length]} alt={`Viagem para ${pkg.destino}`} className="object-cover group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4"><h3 className="text-2xl font-bold text-white">{pkg.destino}</h3><p className="text-sm text-gray-200">Saindo de {pkg.origem}</p></div>
        </div>
        <div className="p-6 flex flex-col flex-grow"><p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{pkg.descricao || `Descubra as maravilhas de ${pkg.destino}.`}</p><div className="flex justify-between items-end gap-4 mt-4"><div><p className="text-sm text-gray-500">A partir de</p><p className="text-2xl font-bold text-green-600">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(pkg.preco)}</p></div><div className="py-2 px-5 bg-green-500 text-white font-semibold rounded-lg shadow-md group-hover:bg-green-600 transition-colors whitespace-nowrap">Ver Detalhes</div></div></div>
      </div>
    </Link>
  );
};

// Página Principal de Pacotes - Versão Final
export default function PackagesPage() {
  const [allPackages, setAllPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<Filters>({ searchTerm: '', categories: [], transportTypes: [] });

  useEffect(() => {
    const loadPackages = async () => {
      setLoading(true);
      const { packages } = await getPublicPackages();
      if (packages) setAllPackages(packages as Package[]);
      setLoading(false);
    };
    loadPackages();
  }, []);

  const filteredPackages = useMemo(() => {
    return allPackages.filter(p => 
      (filters.searchTerm === '' || p.destino.toLowerCase().includes(filters.searchTerm.toLowerCase()) || p.origem.toLowerCase().includes(filters.searchTerm.toLowerCase())) &&
      (filters.categories.length === 0 || (p.categoria && filters.categories.includes(p.categoria))) &&
      (filters.transportTypes.length === 0 || (p.meio_transporte && filters.transportTypes.includes(p.meio_transporte)))
    );
  }, [allPackages, filters]);

  const handleFilterChange = (newFilters: Partial<Filters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-40">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/home" className="flex items-center gap-3"><img src="/imgs/travel_1000dp_FFF_FILL0_wght400_GRAD0_opsz48.svg" alt="Jacarelli Viagens Logo" className="h-8 w-8 bg-green-500 rounded-full p-1" /><span className="text-2xl font-bold text-green-500">Jacarelli Viagens</span></Link>
          <Link href="/home" className="py-2 px-5 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors">Voltar</Link>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="bg-white p-6 rounded-xl shadow-lg mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* CORREÇÃO DE DESIGN: Adicionando a classe placeholder-gray-500 */}
            <input type="text" placeholder="Busque por origem..." onChange={e => handleFilterChange({ searchTerm: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 placeholder-gray-500"/>
            <input type="text" placeholder="Busque por destino..." onChange={e => handleFilterChange({ searchTerm: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 placeholder-gray-500"/>
            <button className="w-full px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors">Buscar</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <FilterSidebar onFilterChange={handleFilterChange} packages={allPackages} currentFilters={filters} />
          
          <div className="lg:col-span-3">
            {loading ? <p className="text-center text-gray-500">Carregando...</p> : filteredPackages.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-xl shadow-lg"><h2 className="text-2xl font-bold text-gray-700">Nenhum Pacote Encontrado</h2><p className="text-gray-500 mt-2">Tente ajustar seus filtros!</p></div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPackages.map((pkg, index) => <PackageCard key={pkg.id} pkg={pkg} index={index} />)}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
