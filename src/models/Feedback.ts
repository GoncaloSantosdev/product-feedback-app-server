import mongoose from "mongoose";
import commentSchema from "./Comment";

const feedbackSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["UI", "UX", "enhancement", "bug", "feature"],
  },
  upvotes: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    required: true,
    enum: ["suggestion", "planned", "in-progress", "live"],
  },
  description: {
    type: String,
    required: true,
  },
  comments: [commentSchema],
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;
