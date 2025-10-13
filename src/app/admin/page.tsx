'use client';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabaseClient';
import { useEffect, useState, useTransition } from 'react';
import { getUsers, updateUserRole } from './actions';

interface ListedUser {
  id: string;
  email?: string;
  role?: string;
}

// O layout (src/app/admin/layout.tsx) agora controla o cabeçalho e a navegação.
// Esta página só precisa renderizar o conteúdo específico de gerenciamento de usuários.
export default function AdminUsersPage() {
  const router = useRouter();
  const [users, setUsers] = useState<ListedUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  // A lógica para carregar e gerenciar usuários permanece a mesma.
  const loadUsers = async () => {
    const { users, error } = await getUsers();
    if (error) {
      console.error("Falha ao carregar usuários:", error.message);
    } else if (users) {
      setUsers(users);
    }
  };

  useEffect(() => {
    const checkAdminAndFetchUsers = async () => {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setCurrentUserId(user.id);
        const { data: userRole } = await supabase
          .from('user_roles')
          .select('role')
          .eq('user_id', user.id)
          .single();
        
        if (userRole?.role !== 'ADMIN') {
          router.push('/home');
        } else {
          await loadUsers();
        }
      } else {
        router.push('/login');
      }
      setLoading(false);
    };
    checkAdminAndFetchUsers();
  }, [router]);

  const handleRoleChange = (targetUserId: string, newRole: 'ADMIN' | 'USER') => {
    if (targetUserId === currentUserId) {
      alert("Você não pode alterar sua própria permissão.");
      return;
    }
    startTransition(async () => {
      await updateUserRole(targetUserId, newRole);
      await loadUsers();
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="text-xl font-semibold text-gray-700 animate-pulse">Carregando usuários...</div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Gerenciamento de Usuários</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-slate-100">
            <tr>
              <th className="py-3 px-5 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Email</th>
              <th className="py-3 px-5 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Permissão</th>
              <th className="py-3 px-5 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-slate-50 transition-colors duration-200">
                <td className="py-4 px-5 font-medium text-gray-800">{user.email}</td>
                <td className="py-4 px-5">
                  <span className={`py-1 px-3 rounded-full text-xs font-bold ${
                    user.role === 'ADMIN' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td className="py-4 px-5 text-center">
                  <div className="flex justify-center gap-2">
                    {user.id !== currentUserId ? (
                      user.role === 'ADMIN' ? (
                        <button
                          onClick={() => handleRoleChange(user.id, 'USER')}
                          disabled={isPending}
                          className="py-2 px-4 bg-amber-500 text-white font-semibold rounded-lg shadow-md hover:bg-amber-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                        >
                          {isPending ? 'Aguarde...' : 'Remover Admin'}
                        </button>
                      ) : (
                        <button
                          onClick={() => handleRoleChange(user.id, 'ADMIN')}
                          disabled={isPending}
                          className="py-2 px-4 bg-sky-500 text-white font-semibold rounded-lg shadow-md hover:bg-sky-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                        >
                          {isPending ? 'Aguarde...' : 'Tornar Admin'}
                        </button>
                      )
                    ) : (
                      <span className="text-sm font-medium text-gray-400 italic">Você</span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
