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

const upload = require('./Upload.js/Multer.js');
import uploads from "./Cloudinary.js"
import * as fs from 'fs'; 
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
app.use("/upload",upload.array('image'),async(req,res)=>{
    const upload= async(path)=>await cloudinary.uploads(path,'Images')
    if(req.method==="POST")
    {
        const urls=[]
        const files=req.files 
        for(const file of files)
        {
            const{path}=file
            const newPath= await  UploadStream(path)
            urls.push(newPath)
            fs.unlinkSync(path)
        }
        res.status(200).json({
            "message":"succesfullyuplaoded",
            data:urls
        })
       
    }
    else{
        res.status(500).json({
            err:"not succes"
        })
    }
})
app.use("/api/product",productrouter)

app.use("/api/cart",Cartrouter)
app.listen(5000,()=>{
  connect();
    console.log("connected")
})
  