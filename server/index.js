import express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userrouter from "./routers/Auth.js"
import cookieParser from "cookie-parser";
import bodyParser  from 'body-parser'
import authrouter from "./routers/Auth.js";
import cors from "cors"
import productrouter from "./routers/items.js";
import Cartrouter from "./routers/Cartrt.js"
import  fileUpload from 'express-fileupload';
import  multerUploads  from "./controllers/multer.js";
import * as fs from 'fs'; 
//import Stripe from "stripe";
const app=express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors()); // Enable CORS for all routes

app.post('/upload', multerUploads, (req, res) => {
    console.log('req.body :', req.body);
    });

    ////
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
app.use(fileUpload({
    useTempFiles : true,
    
}));
app.use("/api/product",productrouter)
//app.use("/api/stripe",stripe)
app.use("/api/cart",Cartrouter)
app.listen(5000,()=>{
  connect();
    console.log("connected")
})
  