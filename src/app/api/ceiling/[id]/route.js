import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import Ceiling from "@/lib/models/ceiling";

// GET /api/ceiling/:id
export async function GET(req, { params }) {
  try {
    await connectToDB();
    const item = await Ceiling.findById(params.id);

    if (!item) {
      return NextResponse.json({ message: "Ceiling not found" }, { status: 404 });
    }

    return NextResponse.json(item);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching ceiling", error }, { status: 500 });
  }
}

// PUT /api/ceiling/:id
export async function PUT(req, { params }) {
  try {
    await connectToDB();
    const body = await req.json();

    const updated = await Ceiling.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return NextResponse.json({ message: "Ceiling not found" }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ message: "Error updating ceiling", error }, { status: 500 });
  }
}

// DELETE /api/ceiling/:id
export async function DELETE(req, { params }) {
  try {
    await connectToDB();
    const deleted = await Ceiling.findByIdAndDelete(params.id);

    if (!deleted) {
      return NextResponse.json({ message: "Ceiling not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Ceiling deleted" });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting ceiling", error }, { status: 500 });
  }
}
