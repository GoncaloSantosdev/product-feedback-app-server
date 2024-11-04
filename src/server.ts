import dotenv from "dotenv";
dotenv.config();
import express from "express";
// db connection
import connectDB from "./config/db-connection";

// Initialize app
const app = express();
// DB Connection
connectDB();

// Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
