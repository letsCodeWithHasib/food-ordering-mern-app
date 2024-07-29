import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

import connectDB from "./config/db.js";

connectDB();

app.get("/", (req, res) => {
  res.send("Sab thik hai");
});

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
