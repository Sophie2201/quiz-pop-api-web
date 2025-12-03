import { log } from "console";
import urlUtils from "../../core/utils/UrlUtils";

// Definimos um tipo para o usuário para ter um código mais seguro e previsível.
type User = {
  id: number;
  name: string;
  email: string;
};

async function getUsers(): Promise<User[]> {
  const apiURl = urlUtils.getUrlBase();
  console.log(`ApiUrl: ${apiURl}`);
  const urlUser = `${apiURl}/api/users`;

  try {
    const res = await fetch(urlUser);
    if (!res.ok) {
      throw new Error(`Falha ao buscar usuários. Status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Erro detalhado:", error);
    throw new Error("Não foi possível carregar os dados dos usuários.");
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
