import { loginUser, registerUser } from "../controller/auth.controller.js";

import { Router } from "express";

const authRouter = Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);

export default authRouter;
