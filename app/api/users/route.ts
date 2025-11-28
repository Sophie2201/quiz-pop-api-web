import { NextResponse } from "next/server";

export async function GET() {
  // Em uma aplicação real, você buscaria estes dados de um banco de dados.
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
    { id: 4, name: "Diana", email: "diana@example.com" },
  ];

  return NextResponse.json(users);
}
