'use client';

import Link from 'next/link';
import { logout } from '../login/actions';

// A Navbar agora é um Componente de Cliente puro.
// Ela recebe o 'user' como uma propriedade (prop) e não busca os seus próprios dados.
export default function Navbar({ user }) {

  const handleLogout = async () => {
    await logout();
  };

  return (
    <header className="bg-white shadow-md w-full z-20">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" viewBox="0 0 20 20" fill="currentColor">
             <path d="M10.894 2.553a1 1 0 00-1.789 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 16.571V11.5a1 1 0 012 0v5.071a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
           </svg>
           <span className="text-2xl font-bold text-gray-800">Jacarelli Viagens</span>
        </Link>

        <div className="flex items-center space-x-5">
            <Link href="/packages" className="text-gray-600 hover:text-green-500 transition-colors duration-200">
                Explorar Pacotes
            </Link>
            {user && (
                 <Link href="/my-trips" className="text-gray-600 hover:text-green-500 transition-colors duration-200">
                    Minhas Viagens
                 </Link>
            )}
        </div>

        <div className="flex items-center space-x-4">
            {user ? (
                <div className="flex items-center space-x-4">
                    <span className="text-gray-700">Olá, {user.user_metadata.full_name || 'viajante'}!</span>
                     <form action={handleLogout}>
                        <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                            Logout
                        </button>
                    </form>
                </div>
            ) : (
                <Link href="/login" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                    Login
                </Link>
            )}
        </div>
      </nav>
    </header>
  );
}
