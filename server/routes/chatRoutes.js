import express from 'express'
import { createChat, deleteChat, getChats } from '../controllers/chatController.js';
import { verifyToken } from "../middlewares/auth.js";


const chatRouter = express.Router();

chatRouter.get("/create",verifyToken,createChat)
chatRouter.get("/get",verifyToken,getChats)
chatRouter.post("/delete",verifyToken,deleteChat)

export default chatRouter;