import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import Putty from "@/lib/models/putty";


export async function GET() {
  await connectToDB();
  const items = await Putty.find();
  return NextResponse.json(items);
}


// POST /api/putty
export async function POST(req) {
  try {
    await connectToDB();

    const body = await req.json();
    const newPutty = await Putty.create(body);

    return NextResponse.json(newPutty, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error creating putty", error }, { status: 500 });
  }
}



// | HTTP Метод | Шлях             | Дія            |
// | ---------- | ---------------- | -------------- |
// | GET        | `/api/putty`     | отримати всі   |
// | GET        | `/api/putty/:id` | отримати один  |
// | POST       | `/api/putty`     | створити новий |
// | PUT        | `/api/putty/:id` | оновити        |
// | DELETE     | `/api/putty/:id` | видалити       |
