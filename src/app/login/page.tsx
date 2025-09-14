'use client';
import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError('Erro: ' + error.message);
    } else if (data.user) {
      setError('');
      // Redirect to home on successful login
      window.location.href = '/home';
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-5 bg-[#f0f4f8]">
      <div className="flex w-full max-w-4xl overflow-hidden rounded-xl shadow-lg bg-white">
        <aside className="hidden md:flex flex-1 justify-center items-center p-8 bg-[#3ECF8E]">
          <img
            src="/imgs/travel_1000dp_FFF_FILL0_wght400_GRAD0_opsz48.svg"
            alt="Logo Jacarelli"
            className="w-40 h-40"
          />
        </aside>
        <main className="flex-1 flex justify-center items-center p-10 md:p-10">
          <form className="w-full max-w-sm" onSubmit={handleLogin}>
            <h1 className="text-2xl font-bold mb-2 text-[#3c4048]">
              Entre na sua Conta
            </h1>
            <p className="text-sm mb-6 text-gray-500">
              Sua jornada começa aqui
            </p>

            {error && (
              <p className="p-3 mb-4 rounded-md text-sm bg-red-100 text-red-700">
                {error}
              </p>
            )}

            <label className="block mb-2 font-semibold text-sm text-[#3c4048]">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu email"
              className="w-full p-3 mb-4 bg-gray-100 border border-gray-300 rounded-md text-sm text-[#3c4048] transition-all duration-300 focus:border-[#3ECF8E] focus:shadow-[0_0_0_3px_rgba(62,207,142,0.1)]"
            />

            <label className="block mb-2 font-semibold text-sm text-[#3c4048]">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Sua senha"
              className="w-full p-3 mb-6 bg-gray-100 border border-gray-300 rounded-md text-sm text-[#3c4048] transition-all duration-300 focus:border-[#3ECF8E] focus:shadow-[0_0_0_3px_rgba(62,207,142,0.1)]"
            />

            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#3ECF8E] text-white font-semibold rounded-md flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#35b47c] hover:-translate-y-0.5 active:bg-[#2f9a69] active:translate-y-0"
            >
              LOGIN
              <span className="material-symbols-outlined text-white text-base">login</span>
            </button>

            <div className="text-center mt-4 text-sm text-gray-500">
              <Link href="/change-password" className="hover:text-[#3ECF8E] hover:underline">
                Esqueci minha senha
              </Link>
            </div>
            <div className="text-center mt-2 text-sm text-gray-500">
              <span>Não tem uma conta? </span>
              <Link href="/register" className="font-semibold text-[#3ECF8E] hover:underline">
                Cadastre-se
              </Link>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
