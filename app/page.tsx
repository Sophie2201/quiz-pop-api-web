import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mt-8">
        <Link
          href="/login"
          className="text-blue-600 hover:text-blue-800 font-semibold text-lg"
        >
          Go to Login Page
        </Link>
      </div>
    </main>
  );
}
