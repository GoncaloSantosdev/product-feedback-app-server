import mongoose from "mongoose";

const replySchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    replyingTo: {
      type: String, // Username of the user being replied to
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId, // Reference to User model
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default replySchema;
