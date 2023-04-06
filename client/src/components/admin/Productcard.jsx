import React from "react";
import img from "../../../public/images/shared/man-headerphone.png"
import { RiDeleteBin2Line } from "react-icons/ri";

export default function Productcard(props)
{
    const del=()=>[

    ]
    console.log(props.items)
    return(
        <div className="h-24 mt-8 w-[90%] bg-yellow-200 mx-auto rounded-xl flex flex-row-reverse  justify-between items-center ">
<div  className="mx-5 flex flex-row  ">
   
    <h1  className="mx-5">Name:{props.items.name}</h1>
    <h1  className="mx-5">Instock:{props.items.count}</h1>
    <h1  className="mx-5">Category:{props.items.category}</h1>
    <h1  className="mx-5">Price:{props.items.price}</h1>
 <span onClick={del}  className="mx-5 cursor-pointer"><RiDeleteBin2Line/></span>
    </div>
<div className="mx-5 ">
<img  className="rounded-xl  w-12 " src={img} />
</div>

</div>
       
    )
}