import React from "react";
import img from '/images/home/desktop/image-speaker-zx9.png'
export default function Zspeaker()
{

    return(
<div className=" mx-auto mt-6 bg-orangish-blue  w-[85%] rounded-xl ">
  <div className=" lg:pt-12 flex flex-col lg:gap-20 justify-around items-center rounded-xl mx-auto w-[90%]   lg:flex-row lg:px-20 ">
    <div className=" ">
    <img className="  w-48 lg:w-64  5" src={img} alt="speaker" />
    </div>
    <div className="items-center flex flex-col lg:items-start text-white py-7">
      <h1 className=" font-bold ... leading-9 text-center text-5xl">ZXP<br></br>Speaker</h1>
      <p className="font-thin pt-3 text-center lg:text-justify  ">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound. </p>
    <button className="mt-4 w-1/2 h-11    rounded-xl  bg-black hover:scale-105 ease-in duration-500 lg:w-36 ">
      Shop Now
    </button>
    </div>
  </div>
</div>
    )
}

