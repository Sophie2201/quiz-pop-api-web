import userService from "@/core/service/UserService";
import { NextResponse } from "next/server";

export async function GET() {
  const users = userService.findAll();

  return NextResponse.json(users);
}
