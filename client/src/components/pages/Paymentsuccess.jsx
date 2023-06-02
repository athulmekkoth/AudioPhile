import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {  reset } from "../redux/cartslice.jsx";
export default function Paymentsuccess()
{
    const dipsatch=useDispatch()
  dipsatch(reset())
  const cart=useSelector((state)=>state.cart)
console.log(cart)

const userRole = "admin";   
    return(
        <div className="mt- m-32">
        <div className="mx-auto my-auto w-[80%]   text-center">
        <h1 className=" text-3xl">Order Sucessful</h1>
        
  <button

  className="bg-blue-400 rounded-xl w-3/5  lg:w-1/5 mt-3 py-3 transition-property: box-shadow  transition-duration: 150ms">Go to Orderes</button>
        </div>
       

        </div>
    )
}