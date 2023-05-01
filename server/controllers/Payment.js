import { instance } from "../index.js"
import dotenv from "dotenv"
import crypto from "crypto"
import exp from "constants";
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
  const{razorpay_payment_id, razorpay_order_id, razorpay_signature}=req.body;

 let body=razorpay_order_id + "|" + razorpay_payment_id;

const expectedSignature = crypto.createHmac('sha256', process.env.key_sec)
                                 .update(body.toString())
                                 .digest('hex');
                            


const isauthentic=expectedSignature===razorpay_signature;
if(isauthentic)
{
  res.redirect(`http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`)
}
else{
  res.status(400).json({succes:false})
}
}
export const getkey=async(req,res,next)=>{
  res.status(200).json({key:process.env.key_id})
  
}