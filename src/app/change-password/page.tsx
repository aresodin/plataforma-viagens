import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ChangePasswordPage() {
  return (
    <div className="flex justify-center items-center min-h-screen p-5 bg-[#f0f4f8]">
      <div className="flex w-full max-w-4xl overflow-hidden rounded-xl shadow-lg bg-white">
        {/* Lado esquerdo - Imagem (escondido em telas pequenas) */}
        <aside className="hidden md:flex flex-1 justify-center items-center p-8 bg-[#3ECF8E]">
          <Image
            src="/imgs/travel_1000dp_FFF_FILL0_wght400_GRAD0_opsz48.svg"
            alt="Logo AeroViagens"
            width={150}
            height={150}
            className="w-auto h-auto"
          />
        </aside>

        {/* Lado direito - Formulário */}
        <main className="flex-1 flex justify-center items-center p-10 md:p-10">
          <form className="w-full max-w-sm">
            <h1 className="text-2xl font-bold mb-2 text-[#3c4048]">
              Redefinir sua Senha
            </h1>
            <p id="subtittle" className="text-sm mb-6 text-gray-500">
              Insira seus dados para criar uma nova senha.
            </p>

            <label htmlFor="email_input" className="block text-sm font-semibold mb-2 text-[#3c4048]">
              Seu Email
            </label>
            <input 
              type="email" 
              id="email_input" 
              name="email_input" 
              placeholder="exemplo@email.com" 
              required 
              className="w-full p-3 mb-6 bg-gray-100 border border-gray-300 rounded-md text-sm text-[#3c4048] transition-all duration-300 focus:border-[#3ECF8E] focus:shadow-[0_0_0_3px_rgba(62,207,142,0.1)]"
            />

            <label htmlFor="password_input" className="block text-sm font-semibold mb-2 text-[#3c4048]">
              Nova Senha
            </label>
            <input 
              type="password" 
              id="password_input" 
              name="password_input" 
              placeholder="Sua nova senha" 
              required 
              className="w-full p-3 mb-6 bg-gray-100 border border-gray-300 rounded-md text-sm text-[#3c4048] transition-all duration-300 focus:border-[#3ECF8E] focus:shadow-[0_0_0_3px_rgba(62,207,142,0.1)]"
            />

            <label htmlFor="confirm_password_input" className="block text-sm font-semibold mb-2 text-[#3c4048]">
              Confirme a Nova Senha
            </label>
            <input 
              type="password" 
              id="confirm_password_input" 
              name="confirm_password_input" 
              placeholder="Confirme sua nova senha" 
              required 
              className="w-full p-3 mb-6 bg-gray-100 border border-gray-300 rounded-md text-sm text-[#3c4048] transition-all duration-300 focus:border-[#3ECF8E] focus:shadow-[0_0_0_3px_rgba(62,207,142,0.1)]"
            />

            <button 
              type="submit" 
              className="w-full py-3 px-4 bg-[#3ECF8E] text-white font-semibold rounded-md transition-all duration-300 hover:bg-[#35b47c] hover:-translate-y-0.5 active:bg-[#2f9a69] active:translate-y-0 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-white text-base">lock_reset</span>
              Alterar Senha
            </button>
            
            <Link href="/login" legacyBehavior>
              <a className="block text-center mt-4 text-sm text-gray-500 hover:text-[#3ECF8E] hover:underline transition-all duration-300">
                Voltar para o Login
              </a>
            </Link>
          </form>
        </main>
      </div>
    </div>
  );
}
