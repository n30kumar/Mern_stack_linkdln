import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import authRouter from "./routes/auth.routes.js"
import userRouter from "./routes/user.routes.js"
import cookieParser from "cookie-parser"
import cors from 'cors'
dotenv.config()
let app=express()
app.use(cors({
    origin: true,
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())
let port=process.env.PORT||5000
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.get("/",(req,res)=>{
    res.send("hello")
})
app.listen(port,()=>{
    connectDb()
    console.log("server is running on port", port)
})
