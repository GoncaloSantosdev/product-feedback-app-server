import mongoose from "mongoose";
import replySchema from "./Reply";

const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId, // Reference to User model
      ref: "User",
      required: true,
    },
    replies: [replySchema],
  },
  {
    timestamps: true,
  }
);

export default commentSchema;
