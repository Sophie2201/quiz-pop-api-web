import { UserDTO } from "../model/dto/UserDTO";

class UserRepository {
  users: Array<UserDTO> = [
    {
      id: 1,
      name: "Sophie Vitória",
      email: "sophie@gmail.com",
    },
    {
      id: 2,
      name: "Rogério Brito",
      email: "rogerio@gmail.com",
    },
    {
      id: 3,
      name: "Claudiana Maria",
      email: "claudiana@gmail.com",
    },
  ];

  findAll() {
    return this.users;
  }
}

export default new UserRepository();
