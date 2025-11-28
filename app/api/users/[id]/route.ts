import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: UserById) {
  // Agora 'params' é um objeto { id: "valor" }
  const { id } = await params;

  // Se precisar do ID como número, você pode convertê-lo:

  return NextResponse.json({ id: id });
}
