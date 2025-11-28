import { log } from "console";

// Definimos um tipo para o usuário para ter um código mais seguro e previsível.
type User = {
  id: number;
  name: string;
  email: string;
};

async function getUsers(): Promise<User[]> {
  const apiURl = process.env.NEXT_PUBLIC_API_URL;
  const urlUser = `${apiURl}/api/users`;
  console.log(urlUser);

  try {
    const res = await fetch(urlUser);
    return res.json();
  } catch (ex) {
    throw new Error("Falha ao buscar usuários" + ex);
  }
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
