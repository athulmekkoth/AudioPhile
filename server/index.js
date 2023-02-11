import express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userrouter from "./routers/Auth.js"
import cookieParser from "cookie-parser";
import bodyParser  from 'body-parser'
import authrouter from "./routers/Auth.js";
import cors from "cors"
import productrouter from "./routers/items.js";


const app=express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors()); // Enable CORS for all routes


mongoose.set('strictQuery', false);


app.use(express.json());
dotenv.config()

const connect=()=>{
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("connected to db")
    })
    .catch((err)=>{
        console.log("not connected to db")
    })
}
app.use(cookieParser())

app.use("/api/auth",authrouter)

app.use("/api/product",productrouter)
app.listen(5000,()=>{
  connect();
    console.log("connected")
})
  