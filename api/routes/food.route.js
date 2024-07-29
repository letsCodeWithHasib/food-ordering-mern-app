import express from "express";
import { addFood } from "../controller/food.controller.js";
import multer from "multer";

//multer engine

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage });

const foodRouter = express.Router();

foodRouter.route("/").post(upload.single("image"), addFood);

export default foodRouter;
