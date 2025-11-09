'use client';

import { useState, useTransition, useEffect, useActionState } from 'react';
import { submitReservation } from '../actions';
import { CreditCard, User, Calendar, Lock } from 'lucide-react';

const initialState = {
  message: '',
  errors: {},
  success: false,
};

// Componente de input reutilizável
const InputField = ({ id, name, placeholder, value, onChange, error, type = 'text', maxLength, className = '' }) => (
  <div>
    <input 
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition text-gray-900 placeholder-gray-500 ${className}`}
      required
    />
    {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
  </div>
);

// Componente de input com ícone
const IconInputField = ({ icon, ...props }) => (
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
      {icon}
    </div>
    <InputField {...props} className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition text-gray-900 placeholder-gray-500" />
  </div>
);

// Componente para inputs de passageiro
const PassengerInput = ({ index, passenger, updatePassenger, errors }) => (
  <div className="space-y-4 pt-4 border-t border-gray-200">
     <h3 className="text-md font-semibold text-gray-800">Passageiro {index + 1}</h3>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField 
            id={`name-${index}`} 
            name={`passengers[${index}][name]`}
            value={passenger.name}
            onChange={(e) => updatePassenger(index, 'name', e.target.value)}
            placeholder="Nome completo"
            error={errors?.[`passengers.${index}.name`]}
        />
        {/* CPF input sem validação de padrão no cliente */}
        <InputField 
            id={`cpf-${index}`} 
            name={`passengers[${index}][cpf]`}
            value={passenger.cpf}
            onChange={(e) => updatePassenger(index, 'cpf', e.target.value)}
            placeholder="CPF (apenas números)"
            maxLength="14" // Permite digitação com máscara
            error={errors?.[`passengers.${index}.cpf`]}
        />
    </div>
  </div>
);

export default function ReservationForm({ packageId, availability, price }: { packageId: string; availability: number; price: number }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formState, formAction] = useActionState(submitReservation, initialState);
  const [isPending, startTransition] = useTransition();
  
  const [step, setStep] = useState(1);
  const [numTravelers, setNumTravelers] = useState(1);
  const [passengers, setPassengers] = useState([{ name: '', cpf: '' }]);
  const [installments, setInstallments] = useState(1);
  const [cardDetails, setCardDetails] = useState({ number: '', name: '', expiry: '', cvv: '' });

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setStep(1);
      setPassengers([{ name: '', cpf: '' }]);
      setNumTravelers(1);
      setInstallments(1);
      setCardDetails({ number: '', name: '', expiry: '', cvv: '' });
    }, 300);
  };

  useEffect(() => {
    if (formState.success && isModalOpen) {
      setStep(3);
    }
  }, [formState.success, isModalOpen]);

  useEffect(() => {
    setPassengers(Array.from({ length: numTravelers }, (_, i) => passengers[i] || { name: '', cpf: '' }));
  }, [numTravelers]);

  const updatePassenger = (index, field, value) => {
    const newPassengers = [...passengers];
    newPassengers[index][field] = value;
    setPassengers(newPassengers);
  };
  
  const handleCardChange = (field, value) => {
      let formattedValue = value;
      if (field === 'number') {
          formattedValue = value.replace(/[^0-9]/g, '').slice(0, 16);
      } else if (field === 'expiry') {
          formattedValue = value.replace(/[^0-9]/g, '').slice(0, 4).replace(/(\d{2})(\d)/, '$1/$2');
      } else if (field === 'cvv') {
          formattedValue = value.replace(/[^0-9]/g, '').slice(0, 4);
      }
      setCardDetails(prev => ({...prev, [field]: formattedValue}));
  }

  const goToNextStep = () => setStep(2);
  const goToPrevStep = () => setStep(1);
  
  // Lógica de Juros Atualizada
  const getInterestRate = (installments) => {
    if (installments <= 3) return 0;
    if (installments <= 6) return 0.05; // 5%
    if (installments <= 9) return 0.07; // 7%
    return 0.10; // 10%
  };

  const baseTotal = price * numTravelers;
  const interestRate = getInterestRate(installments);
  const totalWithInterest = baseTotal * (1 + interestRate);

  const renderInstallmentOptions = () => {
      const options = [];
      for (let i = 1; i <= 12; i++) {
          const currentInterest = getInterestRate(i);
          const total = baseTotal * (1 + currentInterest);
          const value = total / i;
          let text = `${i}x de ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)}`;
          if (currentInterest === 0) {
              text += ' sem juros';
          } else {
              text += ` (${(currentInterest * 100).toFixed(0)}% de juros)`;
          }
          options.push(<option key={i} value={i}>{text}</option>);
      }
      return options;
  }

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="w-full py-4 px-6 bg-green-500 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
        disabled={availability <= 0}
      >
        {availability > 0 ? 'Quero Reservar!' : 'Esgotado'}
      </button>

      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-auto relative transform transition-all animate-fade-in-up max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={handleCloseModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            
            {step === 3 ? (
              <div className="p-8 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Reserva Confirmada!</h2>
                <p className="text-gray-600 leading-relaxed">{formState.message}</p>
                <a href="/my-trips" className="mt-6 block w-full text-center py-3 px-6 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition-all">
                   Ver Minhas Viagens
                </a>
              </div>
            ) : (
              <form action={(formData) => {
                  passengers.forEach((p, i) => {
                      formData.set(`passengers[${i}][name]`, p.name);
                      formData.set(`passengers[${i}][cpf]`, p.cpf);
                  });
                  formData.set('installments', installments.toString());
                  formData.set('card_last_digits', cardDetails.number.slice(-4));

                  startTransition(() => formAction(formData));
              }} className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">Sua Reserva</h2>
                <p className="text-center text-gray-500 mb-6">Passo {step} de 2</p>

                <input type="hidden" name="packageId" value={packageId} />
                <input type="hidden" name="numTravelers" value={numTravelers} />

                <div style={{ display: step === 1 ? 'block' : 'none' }} className="space-y-6 animate-fade-in">
                  <div>
                    <label htmlFor="numTravelers" className="block text-sm font-medium text-gray-700 mb-1">Quantos viajantes?</label>
                    <select id="numTravelers" value={numTravelers} onChange={(e) => setNumTravelers(Number(e.target.value))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition text-gray-900">
                      {Array.from({ length: Math.min(availability, 10) }, (_, i) => i + 1).map(n => (
                        <option key={n} value={n}>{n} {n > 1 ? 'pessoas' : 'pessoa'}</option>
                      ))}
                    </select>
                  </div>
                  {passengers.map((p, i) => <PassengerInput key={i} index={i} passenger={p} updatePassenger={updatePassenger} errors={formState.errors} />)}
                  {formState.message && !formState.success && step === 1 && <p className="text-sm text-red-500 text-center mt-2">{formState.message}</p>}
                  <button type="button" onClick={goToNextStep} className="w-full mt-4 py-3 px-6 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition-all">Continuar para o Pagamento</button>
                </div>

                <div style={{ display: step === 2 ? 'block' : 'none' }} className="space-y-6 animate-fade-in">
                   <div className="bg-slate-100 p-4 rounded-lg">
                        <h3 className="font-bold text-lg mb-2 text-gray-800">Resumo do Pedido</h3>
                        <div className="flex justify-between text-gray-700"><p>Pacote ({numTravelers}x):</p> <p className="font-semibold">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(baseTotal)}</p></div>
                        {interestRate > 0 && <div className="flex justify-between text-sm text-gray-600"><p>Juros ({(interestRate * 100).toFixed(0)}%):</p> <p className="font-semibold">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(baseTotal * interestRate)}</p></div>}
                        <div className="flex justify-between text-xl font-bold mt-2 border-t pt-2 text-gray-900"><p>Total:</p> <p>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalWithInterest)}</p></div>
                   </div>

                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-3">Pagamento com Cartão de Crédito</h3>
                    <div className="space-y-4">
                        <IconInputField icon={<CreditCard className="text-gray-400" size={20}/>} id="card-number" name="card-number" placeholder="Número do Cartão" value={cardDetails.number} onChange={e => handleCardChange('number', e.target.value)} />
                        <IconInputField icon={<User className="text-gray-400" size={20}/>} id="card-name" name="card-name" placeholder="Nome no Cartão" value={cardDetails.name} onChange={e => handleCardChange('name', e.target.value)} />
                        <div className="grid grid-cols-2 gap-4">
                           <IconInputField icon={<Calendar className="text-gray-400" size={20}/>} id="card-expiry" name="card-expiry" placeholder="Validade (MM/AA)" value={cardDetails.expiry} onChange={e => handleCardChange('expiry', e.target.value)} />
                           <IconInputField icon={<Lock className="text-gray-400" size={20}/>} id="card-cvv" name="card-cvv" placeholder="CVV" value={cardDetails.cvv} onChange={e => handleCardChange('cvv', e.target.value)} type="password" />
                        </div>
                    </div>
                  </div>
                  
                  <div>
                      <label htmlFor="installments" className="block text-sm font-medium text-gray-700 mb-1">Opções de Parcelamento</label>
                      <select id="installments" value={installments} onChange={(e) => setInstallments(Number(e.target.value))} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition text-gray-900">
                         {renderInstallmentOptions()}
                      </select>
                  </div>

                  {formState.message && !formState.success && step === 2 && <p className="text-sm text-red-500 text-center">{formState.message}</p>}

                  <div className="flex gap-4 pt-2">
                    <button type="button" onClick={goToPrevStep} className="w-full py-3 px-6 bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300 transition-all">Voltar</button>
                    <button type="submit" disabled={isPending} className="w-full py-3 px-6 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition-all disabled:bg-gray-400 disabled:cursor-wait">
                      {isPending ? 'Confirmando...' : `Pagar ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalWithInterest)}`}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
