import React from "react";

import img from '../../../public/images/home/desktop/headphone-hero-image.png'
export default function Marktwo()
{
    return(
        <div className="pb-10 lg:mt-16 bg-black  pt-52  w-full">
        <div className="  flex-col-reverse flex justify-around lg:ml-24 lg:flex-row">
        <div className=" text-center lg:text-left  basis-1/2">
             <div className="">
             <p className="text-white  uppercase text-md font-thin tracking-[.4em] pb-4">
           New Product
         </p>
         <h1 className="text-white text-4xl  md:text-6xl font-semibold pb-7">
           XX99 Mark II <span>Headphones</span>
         </h1>
         <p className="mx-auto lg:mx-3 text-white text-md tracking-wider font-thin w-full md:w-2/3 leading-6 mb-8">
           Experience natural, life-like audio and exceptional build quality
           made for the passionate music enthusiast.
         </p>
         </div>
         <button className="bg-orange-400 text-white rounded-xl w-40 h-14 hover:bg-orange-600">
      SEE PRODUCT
    </button>
         </div>
    
         
           <div className="mb-22 w-72 lg:mb-0 md:w-[50%] mx-auto">
             <img  className=" " src={img} alt="hd"/>
             </div>
    

           
       
       
       </div>
     </div>
    )
}