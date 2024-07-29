import express from "express";
import { addFood } from "../controller/food.controller.js";
import upload from "../utils/multer.js";

//multer engine

const foodRouter = express.Router();

foodRouter.route("/").post(upload.single("image"), addFood);

export default foodRouter;
