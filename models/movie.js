import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  releaseYear: {
    type: Number,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  director: String,
  duration: Number,
  rating: Number,
  description: String,
  available: {
    type: Boolean,
    default: true
  }
});

export default mongoose.model("Movie", movieSchema);