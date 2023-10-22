import connectMongoDB from "@/libs/mongodb";
import Person from "@/models/person";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newFullName: fullname,
    newCI: ci,
    newAddress: address,
    newContact: contact,
    newClassification: classification,
  } = await request.json();
  await connectMongoDB();
  await Person.findByIdAndUpdate(id, {
    fullname,
    ci,
    address,
    contact,
    classification,
  });
  return NextResponse.json({ message: "Person updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const person = await Person.findOne({ _id: id });
  return NextResponse.json({ person }, { status: 200 });
}
