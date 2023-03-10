import React, { useEffect, useState } from "react";
import img from "../../../public/images/home/desktop/headphone-hero-image.png"
import { useParams } from 'react-router-dom';
import axios from "axios"
export default function Product()
{
  const[data,setdata]=useState({})
  const { id } = useParams();

 useEffect(()=>{
  const getdata=async ()=>{
    const response = await axios.get(`/api/product/find/${id}`)
    setdata(response.data.exist)
  }
getdata();
 },[])
console.log(data)

    return(
      <div className=" pt-28  mx-9 flex gap-4  justify-between  items-end flex-row">
   <div className="w-[30%] ">
   <img  className=" w-[70%]" src={img} alt="slides" />
         </div>
         <div className=" flex flex-col gap-28 w-[50%] justify-center items-start">
     <h1 className="font-extrabold text-9xl" >{data.name}</h1>
         <button className="w-[20%] bg-orange-400 rounded-lg my-7 h-10
         ">Add to Cart</button>
        
          </div>
         
      </div>
    )
}