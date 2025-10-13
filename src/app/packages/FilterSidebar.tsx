'use client';

import { useMemo } from 'react';

// Tipagem para os filtros que o componente pode gerenciar
export type Filters = {
  searchTerm: string;
  categories: string[];
  transportTypes: string[];
};

interface FilterSidebarProps {
  // Pacotes originais para extrair as opções de filtro
  packages: Array<{ categoria?: string; meio_transporte?: string }>;
  currentFilters: Filters;
  onFilterChange: (newFilters: Partial<Filters>) => void;
}

export default function FilterSidebar({ packages, currentFilters, onFilterChange }: FilterSidebarProps) {
  // Extrai opções únicas de categoria e transporte, evitando duplicatas
  const availableCategories = useMemo(() => Array.from(new Set(packages.map(p => p.categoria).filter(Boolean))), [packages]);
  const availableTransportTypes = useMemo(() => Array.from(new Set(packages.map(p => p.meio_transporte).filter(Boolean))), [packages]);

  // Função para lidar com a mudança nos checkboxes
  const handleCheckboxChange = (filterType: 'categories' | 'transportTypes', value: string) => {
    const currentValues = currentFilters[filterType];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value) // Desmarcar
      : [...currentValues, value]; // Marcar
    onFilterChange({ [filterType]: newValues });
  };

  return (
    <aside className="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg h-fit sticky top-28">
      <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">Filtre sua Viagem</h3>
      
      <div className="space-y-6">
        {/* Filtro de Categoria */}
        {availableCategories.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">Categoria</h4>
            <div className="space-y-2">
              {availableCategories.map(category => (
                <label key={category} className="flex items-center space-x-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    onChange={() => handleCheckboxChange('categories', category)}
                    checked={currentFilters.categories.includes(category)}
                    className="h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="text-gray-700">{category}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Divisor */}
        {availableCategories.length > 0 && availableTransportTypes.length > 0 && <div className="border-t border-gray-200"></div>}

        {/* Filtro de Meio de Transporte */}
        {availableTransportTypes.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">Meio de Transporte</h4>
            <div className="space-y-2">
              {availableTransportTypes.map(transport => (
                <label key={transport} className="flex items-center space-x-3 cursor-pointer">
                  <input 
                    type="checkbox"
                    onChange={() => handleCheckboxChange('transportTypes', transport)}
                    checked={currentFilters.transportTypes.includes(transport)}
                    className="h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="text-gray-700">{transport}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
