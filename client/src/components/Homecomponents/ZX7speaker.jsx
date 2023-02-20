import React from "react";
import img from '../../../public/images/home/desktop/image-speaker-zx7.jpg'
export default function ZX7speaker()
{

    return(
<div className="w-full mt-8 ">
<div className="mx-auto w-[85%]  flex  gap-10 ">
  <div className="w-[95%] h-56 mx-auto  flex flex-col justify-evenly items-center bg-neutral-200 rounded-xl  lg:w-1/3 lg:h-auto">
    <h1 className="text-gray-500 text-4xl">ZX7 SPEAKER</h1>
    <button className="w-1/2 h-11  bg-gray-400 rounded-lg  hover:scale-105 ease-in duration-500 lg:w-28 lg:h-11"> Explore Now</button>
  </div>
  <div className="hidden lg:block">
    <img src={img} alt="zx7" />
  </div>
</div>
</div>
 
    )
}
