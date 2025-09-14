'use client';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabaseClient';

export default function HomePage() {
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error logging out:', error);
      // Optionally, show an error message to the user
    } else {
      router.push('/login');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f0f4f8]">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-lg mx-auto">
        <h1 className="text-4xl font-bold text-[#3c4048] mb-4">Bem-vindo à Jacarelli!</h1>
        <p className="text-lg text-gray-600 mb-8">Sua jornada pelo Brasil começa agora.</p>
        <button
          onClick={handleLogout}
          className="py-3 px-6 bg-[#3ECF8E] text-white font-semibold rounded-md flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#35b47c] hover:-translate-y-0.5 active:bg-[#2f9a69] active:translate-y-0"
        >
          <span className="material-symbols-outlined text-white text-base">logout</span>
          Logout
        </button>
      </div>
    </div>
  );
}
