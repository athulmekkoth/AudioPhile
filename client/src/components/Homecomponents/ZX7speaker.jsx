import React from "react";
import img from '../../../public/images/home/desktop/image-speaker-zx7.jpg'
export default function ZX7speaker()
{

    return(
<div className="w-full mt-8 ">
<div className="mx-auto w-[85%]  flex  gap-10 ">
  <div className="flex flex-col justify-center items-center bg-neutral-200 rounded-xl  w-1/3">
    <h1 className="text-gray-500 text-4xl">ZX7 SPEAKER</h1>
    <button className="bg-gray-600 rounded-lg  hover:bg-slate-400 duration-200 w-24 h-11"> explore now</button>
  </div>
  <div>
    <img src={img} alt="d" />
  </div>
</div>
</div>
 
    )
}

/*
<div className="items-center flex flex-col lg:items-start text-white py-7">
      <h1 className=" font-bold ... leading-9 text-center text-5xl">ZXP<br></br>Speaker</h1>
     
    <button className="mt-4 w-1/2 h-11    rounded-xl  bg-black hover:scale-105 ease-in duration-500 lg:w-36 ">
      Shop Now
    </button>
    </div>*/