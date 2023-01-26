import React from "react";

import img from '../../../public/images/home/desktop/headphone-hero-image.png'
export default function Marktwo()
{
    return(
        <div className="mt-16 bg-black  pt-52  w-full">
        <div className="flex justify-around ml-24">
        <div className="basis-1/2">
             <div>
             <p className="text-white  uppercase text-md font-thin tracking-[.4em] pb-4">
           New Product
         </p>
         <h1 className="text-white text-4xl  md:text-6xl font-semibold pb-7">
           XX99 Mark II <span>Headphones</span>
         </h1>
         <p className="text-white text-md tracking-wider font-thin w-full md:w-2/3 leading-6 mb-8">
           Experience natural, life-like audio and exceptional build quality
           made for the passionate music enthusiast.
         </p>
         </div>
        
         </div>
         
           <div className="mb-12 w-72 md:mb-0 md:w-[50%] mx-auto">
             <img  className=" " src={img} alt="hd"/>
             </div>
       

           
       
       
       </div>
     </div>
    )
}