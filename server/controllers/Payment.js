import { instance } from "../index.js"
import dotenv from "dotenv"
export const checkout=async(req,res,next)=>{ 

try{
const options = {
  amount: req.body.amount,  // amount in the smallest currency unit
  currency: "INR",

};

const order=await instance.orders.create(options)

res.status(200).json({succes:true,order})
}
catch(err)
{
  console.log(err)
}
}
export const paymentverification=async(req,res,next)=>{
  console.log(req.body)
  res.status(200).json({succes:true})

}
export const getkey=async(req,res,next)=>{
  res.status(200).json({key:process.env.key_id})
  
}