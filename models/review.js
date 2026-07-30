import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  movieTitle: {
    type: String,
    required: true,
    trim: true
  },
  reviewerName: {
    type: String,
    required: true,
    trim: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  review: {
    type: String,
    required: true
  },
  reviewDate: {
    type: Date,
    default: Date.now
  },
  recommended: {
    type: Boolean,
    default: true
  }
});

export default mongoose.model("Review", reviewSchema);