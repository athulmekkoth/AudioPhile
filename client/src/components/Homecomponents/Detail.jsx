import React from "react";
import img from "../../../public/images/shared/man-headerphone.png"
export default function Detail()
{
    return(
    <div className="mt-11 w-full pb-7">
        <div className="w-[90%] flex  flex-col mx-auto gap-7 items-center lg:flex-row lg:justify-evenly">
        <div className="basis-1/2">
        <h1 className="text-3xl font-medium tracking-wider">THE BEST AUDIO <span className="text-yellow-600 ">EXPERIENCE</span><br />EVER</h1>
        <p className=" text-justify font-extralight    lg:wd-full">
        Nestled in the bustling heart of New York City,
        Audiophile is a haven for audiophiles seeking
        the ultimate listening experience. As the premier
         store for top-of-the-line earphones, headphones, 
         speakers, and audio accessories, we offer a spacious
          showroom and plush demonstration rooms where you can
           peruse and immerse yourself in our extensive product
            offerings. Come visit us and get to know the passionate
             individuals who make Audiophile the premier destination 
             for all your portable audio needs.
        </p>
        </div>
        <div>
<img className="mx-auto rounded-xl"src={img}alr="man" />
        </div>
        </div>
    </div>
    )
}