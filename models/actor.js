import mongoose from "mongoose";

const actorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  birthDate: {
    type: Date,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  biography: String
});

export default mongoose.model("Actor", actorSchema);