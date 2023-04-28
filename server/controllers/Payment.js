import { instance } from "../index.js"
export const checkout=async(req,res,next)=>{ 


const options = {
  amount: 50000,  // amount in the smallest currency unit
  currency: "INR",

};

const order=await instance.orders.create(options)
console.log(order)
}