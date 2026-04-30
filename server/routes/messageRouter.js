import express from 'express'
import { verifyToken } from '../middlewares/auth.js';
import { imageMessageController, textMessageControllere } from '../controllers/messageController.js';


const messageRouter = express.Router();

messageRouter.post("/text",verifyToken,textMessageControllere)
messageRouter.post("/image",verifyToken,imageMessageController)

export default messageRouter;
