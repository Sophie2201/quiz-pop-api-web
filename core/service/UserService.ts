import userRepository from "../repository/UserRepository";

class UserService {
  findAll() {
    return userRepository.findAll();
  }
}

export default new UserService();
