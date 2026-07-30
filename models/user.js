import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  favoriteGenre: {
    type: String,
    required: true
  },
  membershipType: {
    type: String,
    enum: ["Basic", "Premium", "VIP"],
    default: "Basic"
  },
  active: {
    type: Boolean,
    default: true
  }
});

export default mongoose.model("User", userSchema);