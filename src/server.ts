import dotenv from "dotenv";
dotenv.config();
import express from "express";
// Middlewares
import cors from "cors";
// db connection
import connectDB from "./config/db-connection";
// Routes
import feedbackRoutes from "./routes/feedbackRoutes";

// Initialize app
const app = express();
// DB Connection
connectDB();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use("/api/feedbacks", feedbackRoutes);

// Router Not Found middleware
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});
// Error handler middlewares
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const statusCode = (err as any).statusCode || 500;
    const message = err.message || "Internal Server Error";
    const stack = err.stack;

    console.error(err);

    res.status(statusCode).json({
      success: false,
      message,
      stack,
    });
  }
);

// Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
