import express from "express";
import { getPublishedImaes, getUser, loginUser, registerUser } from "../controllers/userController.js";
import { verifyToken } from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.get("/data",verifyToken,getUser)
userRouter.get("/published-images",verifyToken,getPublishedImaes)


export default userRouter;