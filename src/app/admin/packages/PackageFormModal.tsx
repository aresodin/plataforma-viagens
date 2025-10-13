'use client';
import { useEffect, useState } from 'react';

// Tipagem para os dados do formulário
type PackageFormData = {
  id?: string;
  origem: string;
  destino: string;
  data_ida: string;
  data_volta: string;
  meio_transporte: string;
  companhia: string;
  preco: number;
  disponibilidade: number;
  descricao: string;
  imagem_url: string;
  categoria: string;
  ativo: boolean;
};

// Props do componente
interface PackageFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: PackageFormData) => void;
  packageToEdit?: Partial<PackageFormData> | null; // Usar Partial para flexibilidade
  isSaving: boolean;
}

const initialFormData: PackageFormData = {
  origem: '',
  destino: '',
  data_ida: '',
  data_volta: '',
  meio_transporte: 'Aéreo',
  companhia: '',
  preco: 0,
  disponibilidade: 0,
  descricao: '',
  imagem_url: '',
  categoria: '',
  ativo: true,
};

// Componente de Input reutilizável
const FormInput = (props: React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> & { label?: string, isTextArea?: boolean, isSelect?: boolean }) => {
  const { label, isTextArea, isSelect, ...rest } = props;
  const commonClasses = "w-full p-3 bg-slate-100 border border-slate-200 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow";
  return (
    <div>
      {label && <label className="text-sm font-medium text-gray-600 mb-1 block">{label}</label>}
      {isTextArea ? <textarea {...rest} className={commonClasses} /> :
       isSelect ? <select {...rest} className={commonClasses} /> :
       <input {...rest} className={commonClasses} />}
    </div>
  );
};

export default function PackageFormModal({ isOpen, onClose, onSubmit, packageToEdit, isSaving }: PackageFormModalProps) {
  const [formData, setFormData] = useState<PackageFormData>(initialFormData);
  const formId = `package-form-${Math.random().toString(36).substring(2, 9)}`;

  useEffect(() => {
    if (isOpen) { // Apenas processa quando o modal é aberto
      if (packageToEdit) {
        // CORREÇÃO: Mapeia o objeto 'packageToEdit' e substitui qualquer valor 'null' ou 'undefined' por uma string vazia.
        const sanitizedData = Object.entries(packageToEdit).reduce((acc, [key, value]) => {
          acc[key as keyof PackageFormData] = value === null || value === undefined ? '' : value;
          return acc;
        }, {} as Partial<PackageFormData>);

        const formatDate = (dateString: string) => {
          if (!dateString) return '';
          const date = new Date(dateString);
          // Validação para evitar "Invalid Date"
          return !isNaN(date.getTime()) ? new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().slice(0, 16) : '';
        };

        setFormData({
          ...initialFormData, // Começa com a base para garantir que todos os campos existam
          ...sanitizedData,   // Sobrescreve com os dados "limpos"
          data_ida: formatDate(sanitizedData.data_ida || ''),
          data_volta: formatDate(sanitizedData.data_volta || ''),
        });
      } else {
        setFormData(initialFormData); // Reseta para o formulário de criação
      }
    }
  }, [packageToEdit, isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4 animate-fade-in-fast">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[95vh] flex flex-col transform transition-transform duration-300 scale-95 animate-scale-in">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900">
            {packageToEdit ? 'Editar Pacote de Viagem' : 'Adicionar Novo Pacote'}
          </h2>
        </div>

        <form id={formId} onSubmit={handleSubmit} className="flex-grow overflow-y-auto p-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
            <FormInput name="destino" value={formData.destino} onChange={handleChange} placeholder="Ex: Salvador, BA" label="Destino" required />
            <FormInput name="origem" value={formData.origem} onChange={handleChange} placeholder="Ex: São Paulo, SP" label="Origem" required />
            <FormInput type="datetime-local" name="data_ida" value={formData.data_ida} onChange={handleChange} label="Data de Ida" required />
            <FormInput type="datetime-local" name="data_volta" value={formData.data_volta} onChange={handleChange} label="Data de Volta" />
            <FormInput isSelect name="meio_transporte" value={formData.meio_transporte} onChange={handleChange} label="Meio de Transporte">
              <option>Aéreo</option><option>Terrestre</option><option>Marítimo</option>
            </FormInput>
            <FormInput name="companhia" value={formData.companhia} onChange={handleChange} placeholder="Ex: Azul, GOL" label="Companhia" />
            <FormInput type="number" name="preco" value={formData.preco} onChange={handleChange} placeholder="0.00" label="Preço (BRL)" required />
            <FormInput type="number" name="disponibilidade" value={formData.disponibilidade} onChange={handleChange} placeholder="0" label="Vagas Disponíveis" required />
            <div className="md:col-span-2"><FormInput name="categoria" value={formData.categoria} onChange={handleChange} placeholder="Ex: Praia, Aventura, Família" label="Categoria" /></div>
            <div className="md:col-span-2"><FormInput name="imagem_url" value={formData.imagem_url} onChange={handleChange} placeholder="https://exemplo.com/imagem.jpg" label="URL da Imagem de Capa" /></div>
            <div className="md:col-span-2"><FormInput isTextArea name="descricao" value={formData.descricao} onChange={handleChange} placeholder="Descreva os detalhes do pacote..." label="Descrição do Pacote" rows={5} /></div>
            <div className="flex items-center gap-3 md:col-span-2 mt-2">
              <input type="checkbox" id="ativo" name="ativo" checked={formData.ativo} onChange={handleChange} className="h-5 w-5 rounded text-green-600 focus:ring-green-500" />
              <label htmlFor="ativo" className="font-medium text-gray-800">Pacote Ativo</label>
            </div>
          </div>
        </form>

        <div className="p-6 border-t border-gray-200 bg-gray-50/50 flex justify-end gap-4 rounded-b-xl">
          <button type="button" onClick={onClose} disabled={isSaving} className="py-2 px-6 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-all">Cancelar</button>
          <button type="submit" form={formId} disabled={isSaving} className="py-2 px-8 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-all">{isSaving ? 'Salvando...' : 'Salvar Pacote'}</button>
        </div>
      </div>
    </div>
  );
}
