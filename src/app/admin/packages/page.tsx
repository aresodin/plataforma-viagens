'use client';
import { useEffect, useState, useTransition } from 'react';
import { getPackages, createPackage, updatePackage, deletePackage } from './actions';
import PackageFormModal from './PackageFormModal'; // Importa o componente do modal

// Tipagem para o pacote de viagem, baseada no schema do DB
type Package = {
  id: string;
  [key: string]: any; // Permite outras propriedades
};

export default function AdminPackagesPage() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [packageToEdit, setPackageToEdit] = useState<Package | null>(null);
  const [isSaving, startTransition] = useTransition();

  // Função para carregar os pacotes do servidor
  const loadPackages = async () => {
    setLoading(true);
    const { packages, error } = await getPackages();
    if (error) {
      console.error("Falha ao carregar pacotes:", error.message);
      // TODO: Adicionar um feedback visual de erro para o usuário
    } else if (packages) {
      setPackages(packages as Package[]);
    }
    setLoading(false);
  };

  // Carrega os pacotes quando a página é montada
  useEffect(() => {
    loadPackages();
  }, []);

  // Funções para controlar o modal
  const handleOpenCreateModal = () => {
    setPackageToEdit(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (pkg: Package) => {
    setPackageToEdit(pkg);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setPackageToEdit(null);
  };

  // Função para lidar com o submit do formulário (criar ou atualizar)
  const handleSubmit = async (formData: Omit<Package, 'id'> & { id?: string }) => {
    startTransition(async () => {
      const action = formData.id ? updatePackage : createPackage;
      const result = await action(formData);
      
      if (result.error) {
        console.error("Erro ao salvar pacote:", result.error.message);
        // TODO: Mostrar erro no formulário
      } else {
        handleCloseModal();
        await loadPackages(); // Recarrega a lista
      }
    });
  };

  // Função para deletar um pacote
  const handleDelete = async (packageId: string) => {
    if (window.confirm("Tem certeza que deseja excluir este pacote? Esta ação não pode ser desfeita.")) {
      startTransition(async () => {
        const result = await deletePackage(packageId);
        if (result.error) {
          console.error("Erro ao deletar pacote:", result.error.message);
        } else {
          await loadPackages(); // Recarrega a lista
        }
      });
    }
  };

  return (
    <>
      <PackageFormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        packageToEdit={packageToEdit}
        isSaving={isSaving}
      />
      <div className="bg-white p-8 rounded-xl shadow-lg animate-fade-in">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Gerenciamento de Pacotes</h2>
          <button
            onClick={handleOpenCreateModal}
            className="py-2 px-5 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all duration-300 cursor-pointer transform hover:scale-105"
          >
            + Adicionar Pacote
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-slate-100">
              <tr>
                <th className="py-3 px-5 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Destino</th>
                <th className="py-3 px-5 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Origem</th>
                <th className="py-3 px-5 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Preço</th>
                <th className="py-3 px-5 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">Disponibilidade</th>
                <th className="py-3 px-5 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan={5} className="py-10 text-center"><p className="text-gray-500 animate-pulse">Carregando pacotes...</p></td>
                </tr>
              ) : packages.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-10 text-center">
                    <p className="text-gray-500">Nenhum pacote cadastrado ainda.</p>
                    <p className="text-gray-400 text-sm mt-1">Clique em "Adicionar Pacote" para começar.</p>
                  </td>
                </tr>
              ) : (
                packages.map((pkg) => (
                  <tr key={pkg.id} className="hover:bg-slate-50 transition-colors duration-200">
                    <td className="py-4 px-5 font-medium text-gray-800">{pkg.destino}</td>
                    <td className="py-4 px-5 text-gray-600">{pkg.origem}</td>
                    <td className="py-4 px-5 text-gray-600">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(pkg.preco)}</td>
                    <td className="py-4 px-5 text-center text-gray-600">{pkg.disponibilidade}</td>
                    <td className="py-4 px-5 text-center">
                      <div className="flex justify-center gap-4">
                        <button onClick={() => handleOpenEditModal(pkg)} className="font-medium text-sky-600 hover:text-sky-800 transition-colors cursor-pointer">Editar</button>
                        <button onClick={() => handleDelete(pkg.id)} disabled={isSaving} className="font-medium text-red-500 hover:text-red-700 transition-colors cursor-pointer disabled:opacity-50">Excluir</button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
