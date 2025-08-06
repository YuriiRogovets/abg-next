import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import Putty from "@/lib/models/putty";

// GET /api/putty/:id
export async function GET(request, { params }) {
  try {
    await connectToDB();

    const putty = await Putty.findById(params.id);

    if (!putty) {
      return NextResponse.json({ message: "Putty not found" }, { status: 404 });
    }

    return NextResponse.json(putty);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching putty", error }, { status: 500 });
  }
}


// PUT /api/putty/:id
export async function PUT(req, { params }) {
  try {
    await connectToDB();
    const data = await req.json();

    const updatedPutty = await Putty.findByIdAndUpdate(params.id, data, {
      new: true,
      runValidators: true,
    });

    if (!updatedPutty) {
      return NextResponse.json({ message: "Putty not found" }, { status: 404 });
    }

    return NextResponse.json(updatedPutty);
  } catch (error) {
    return NextResponse.json({ message: "Error updating putty", error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectToDB();

    const deletedPutty = await Putty.findByIdAndDelete(params.id);

    if (!deletedPutty) {
      return NextResponse.json({ message: "Putty not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Putty deleted" });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting putty", error }, { status: 500 });
  }
}