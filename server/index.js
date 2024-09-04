import express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser  from 'body-parser'
import authrouter from "./routers/Auth.js";
import cors from "cors"
import productrouter from "./routers/items.js";
import Cartrouter from "./routers/Cartrt.js"
import Orderouter from "./routers/Orders.js";
import Messagerouter from "./routers/Message.js";
import cloudinary from "cloudinary"
import Razorpay from "razorpay";
import Paymentrouter from "./routers/Payment.js";
const app=express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors()); // Enable CORS for all routes


cloudinary.v2.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
})
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
app.get("/hello",(req,res)=>{
    res.status(200).json({message:"works"})
})
app.use("/api/auth",authrouter)
app.use("/api/order",Orderouter)
app.use("/api/pay",Paymentrouter)
export const instance = new Razorpay({
    key_id: process.env.key_id,
    key_secret: process.env.key_sec
  });

  app.use("/api/mesg",Messagerouter)

app.use("/api/product",productrouter)
//app.use("/api/stripe",stripe)
app.use("/api/cart",Cartrouter)
app.listen(5000,()=>{
  connect();
    console.log("connected")
})
  