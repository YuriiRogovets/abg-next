import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import Ceiling from "@/lib/models/ceiling";

// GET /api/ceiling
export async function GET() {
  try {
    await connectToDB();
    const items = await Ceiling.find();
    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching ceilings", error }, { status: 500 });
  }
}

// POST /api/ceiling
export async function POST(req) {
  try {
    await connectToDB();
    const body = await req.json();
    const newCeiling = await Ceiling.create(body);
    return NextResponse.json(newCeiling, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error creating ceiling", error }, { status: 500 });
  }
}

