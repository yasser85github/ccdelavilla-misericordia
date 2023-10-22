import connectMongoDB from "@/libs/mongodb";
import Person from "@/models/person";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { fullname, ci, address, contact, classification } =
    await request.json();
  await connectMongoDB();
  await Person.create({ fullname, ci, address, contact, classification });
  return NextResponse.json({ message: "Person Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const people = await Person.find();
  return NextResponse.json({ people });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Person.findByIdAndDelete(id);
  return NextResponse.json({ message: "Person deleted" }, { status: 200 });
}
