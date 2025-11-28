// Definimos um tipo para o usuário para ter um código mais seguro e previsível.
type User = {
  id: number;
  name: string;
  email: string;
};

// Esta função busca os dados da nossa API.
// O Next.js automaticamente gerencia o cache dessa requisição.
async function getUsers(): Promise<User[]> {
  // Como este código roda no servidor, precisamos usar a URL absoluta da API.
  // Em produção, use uma variável de ambiente para o domínio (ex: process.env.NEXT_PUBLIC_API_URL).
  const res = await fetch("http://localhost:3000/api/users");

  if (!res.ok) {
    // Recomendo tratar os erros de forma mais robusta em uma aplicação real.
    throw new Error("Falha ao buscar usuários");
  }

  return res.json();
}

export default async function Users() {
  const users = await getUsers();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Lista de Usuários</h1>
      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user.id} className="p-4 bg-white rounded-lg shadow">
            <p className="font-semibold text-lg">{user.name}</p>
            <p className="text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
