import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Sab thik hai");
});

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
