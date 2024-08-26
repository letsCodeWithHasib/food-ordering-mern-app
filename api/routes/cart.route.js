import { Router } from "express";
import {
  addToCart,
  removeFromCart,
  fetchCart,
} from "../controller/cart.controller.js";
import auth from "../middleware/auth.js";

const cartRouter = Router();

cartRouter.post("/add", auth, addToCart);
cartRouter.delete("/remove", auth, removeFromCart);
cartRouter.get("/cart", auth, fetchCart);

export default cartRouter;
