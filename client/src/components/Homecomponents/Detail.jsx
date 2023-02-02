import React from "react";
import img from "../../../public/images/shared/man-headerphone.png"
export default function Detail()
{
    return(
    <div className="mt-11 w-full">
        <div className="mx-32 flex justify-center items-center">
        <div className="">
        <h1 className="text-3xl font-medium tracking-wider">THE BEST AUDIO <span className="text-yellow-600 ">EXPERIENCE</span><br />EVER</h1>
        <p className="font-extralight break-all tabular-nums ">
        The best place to get high-end earbuds, headphones, speakers, and audio accessories is Audiophile, which is centrally located in New York City.
        </p>
        </div>
        <div>
<img className="rounded-xl"src={img}alr="man" />
        </div>
        </div>
    </div>
    )
}