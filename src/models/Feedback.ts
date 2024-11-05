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
    enum: ["UI", "UX", "Enhancement", "Bug", "Feature"],
  },
  upvotes: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: ["suggestion", "planned", "in-progress", "live"],
    default: "suggestion",
  },
  description: {
    type: String,
    required: true,
  },
  comments: [commentSchema],
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;
