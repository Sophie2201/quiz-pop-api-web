import userService from "@/core/service/UserService";
import { UserDTO } from "@/core/model/dto/UserDTO";

async function getUsers(): Promise<UserDTO[]> {
  // Os dados agora são buscados diretamente do service,
  // evitando chamadas HTTP durante o build.
  try {
    const users = await userService.findAll();
    return users;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
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
