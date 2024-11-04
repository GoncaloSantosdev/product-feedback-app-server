import dotenv from "dotenv";
dotenv.config();
import express from "express";
// Middlewares
import cors from "cors";
// db connection
import connectDB from "./config/db-connection";

// Initialize app
const app = express();
// DB Connection
connectDB();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
