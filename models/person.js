import mongoose, { Schema } from "mongoose";

const personSchema = new Schema(
  {
    fullname: String,
    ci: String,
  },
  {
    timestamps: true,
    collection: "people",
  }
);

const Person = mongoose.models.Person || mongoose.model("Person", personSchema);

export default Person;
