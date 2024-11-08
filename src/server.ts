import dotenv from "dotenv";
dotenv.config();
import express from "express";
// Middlewares
import cors from "cors";
// db connection
import connectDB from "./config/db-connection";
// Routes
import userRoutes from "./routes/userRoutes";
import feedbackRoutes from "./routes/feedbackRoutes";
// Import middlewares
import notFoundMiddleware from "./middlewares/notFoundMiddleware"; // Import Not Found Middleware
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware"; // Import Error Handler Middleware

// Initialize app
const app = express();
// DB Connection
connectDB();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/feedbacks", feedbackRoutes);

// Use Not Found middleware
app.use(notFoundMiddleware); // Use Not Found Middleware
// Use Error handler middleware
app.use(errorHandlerMiddleware); // Use Error Handler Middleware

// Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
