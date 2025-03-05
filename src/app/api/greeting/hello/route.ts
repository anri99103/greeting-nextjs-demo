import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const name = body.name || "Guest"

    return NextResponse.json({ message: `Hello, ${name}!` }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}
