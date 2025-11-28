import Link from "next/link";

const LoginPage = () => {
  const signIn = () => {
    console.log("funcionou!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm border border-gray-100">
        <h1 className="text-2xl font-bold mb-8 text-center text-gray-900">
          Boas-vindas de volta!
        </h1>
        <form>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition duration-200"
              placeholder="seuemail@exemplo.com"
            />
          </div>
          <div className="mb-7">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition duration-200"
              placeholder="********"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-200 w-full"
            >
              Entrar
            </button>
          </div>
          <div className="mt-3 display: flex">
            <p className="text-gray-500 text-sm pr-1">Não tem uma conta?</p>
            <Link
              href="/users"
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Cadastre-se
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
