import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connnectDB from './configs/db.js'
import userRouter from './routes/userRoutes.js'
import chatRouter from './routes/chatRoutes.js'
import messageRouter from './routes/messageRouter.js'

const app = express()

await connnectDB()

const PORT = process.env.PORT || 3000

//Middlewares
app.use(cors({
        origin:"https://bird-bot.vercel.app"
}))
app.use(express.json())

//Routes

app.use("/api/user",userRouter)
app.use("/api/chat",chatRouter)
app.use("/api/message",messageRouter)


app.listen(PORT,()=>{
   console.log(`Server is live  on ${PORT}`)
})