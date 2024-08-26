import express from "express";
import dotenv from "dotenv";
import Cookies from "cookie-parser";
dotenv.config();
const app = express();

import cors from "cors";
import foodRoute from "./routes/food.route.js";
import authRoute from "./routes/auth.route.js";

//middlewares
app.use(express.json());
app.use(Cookies());
app.use(cors());

import connectDB from "./config/db.js";
connectDB();

//api endpoints
app.use("/api/v1/food", foodRoute);
app.use("/api/auth", authRoute);
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Sab thik hai");
});

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
