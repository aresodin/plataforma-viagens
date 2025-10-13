'use client';

import { useState, useTransition, useEffect, useActionState } from 'react';
// CORREÇÃO: Importando a Server Action do novo local consolidado
import { submitReservation } from '../actions'; 

const initialState = {
  message: '',
  errors: {
    name: [],
    email: [],
  },
  success: false,
};

export default function ReservationForm({ packageId, availability }: { packageId: string; availability: number }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formState, formAction] = useActionState(submitReservation, initialState);
  const [isPending, startTransition] = useTransition();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (formState.success && isModalOpen) {
      const timer = setTimeout(() => {
        handleCloseModal();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [formState.success, isModalOpen]);

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
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto relative transform transition-all animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            
            <button onClick={handleCloseModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {formState.success ? (
              <div className="p-8 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Obrigado!</h2>
                  <p className="text-gray-600 leading-relaxed">{formState.message}</p>
              </div>
            ) : (
              <form action={(formData) => startTransition(() => formAction(formData)) } className="p-8 space-y-5">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Formulário de Reserva</h2>
                
                <input type="hidden" name="packageId" value={packageId} />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition" />
                  {formState.errors?.name && <p className="text-sm text-red-500 mt-1">{formState.errors.name[0]}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition" />
                  {formState.errors?.email && <p className="text-sm text-red-500 mt-1">{formState.errors.email[0]}</p>}
                </div>

                {formState.message && !formState.success && <p className="text-sm text-red-500 text-center">{formState.message}</p>}
                
                <button 
                  type="submit" 
                  disabled={isPending}
                  className="w-full py-3 px-6 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition-all disabled:bg-gray-400 disabled:cursor-wait"
                >
                  {isPending ? 'Enviando Reserva...' : 'Confirmar Reserva'}
                </button>
              </form>
            )}

          </div>
        </div>
      )}
    </>
  );
}
