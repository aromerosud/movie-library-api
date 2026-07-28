import mongoose from "mongoose";

const actorSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  birthDate: Date,
  nationality: String,
  biography: String
});

export default mongoose.model("Actor", actorSchema);