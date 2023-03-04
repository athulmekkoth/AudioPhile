import React from "react";
import img from "../../../public/images/home/desktop/headphone-hero-image.png"

export default function Product()
{
    return(
      <div className="pt-28  flex justify-center  items-center flex-col">
         <img  className="w-[55%]" src={img} alt="slides" />
         <button className="w-[50%] bg-orange-400 rounded-lg my-7 h-10
         ">Add to Cart</button>
   
      </div>
    )
}