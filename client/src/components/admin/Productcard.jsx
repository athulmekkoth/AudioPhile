import React from "react";
import img from "../../../public/images/shared/man-headerphone.png"
import { RiDeleteBin2Line } from "react-icons/ri";
import axios from "axios"
import {Link, Outlet} from "react-router-dom"
export default function Productcard(props)
{
const del=async()=>{
    console.log(props.items._id)
    const response=await axios.delete("/api/product/del",({id:props.items._id}))
    if(response.data.status===201)
    {
        console.log("ok")
    }
    else
    {console.log("notok")

    }


}

  
    return(
        <div className="h-24 mt-8 w-[90%] bg-yellow-200 mx-auto rounded-xl flex flex-row-reverse  justify-between items-center ">
<div  className="mx-5 flex flex-row  ">
   
    <h1  className="mx-5">Name:{props.items.name}</h1>
    <h1  className="mx-5">Instock:{props.items.count}</h1>
    <h1  className="mx-5">Category:{props.items.category}</h1>
    <h1  className="mx-5">Price:{props.items.price}</h1>
    <Link to="/admin/updateproduct" state={{ from: "occupation" }}>

        <button  className="bg-gray-700 rounded-md hover:animate-pulse">Update product</button></Link>
 <span onClick={del}  className="mx-5 cursor-pointer"><RiDeleteBin2Line/></span>

    </div>
<div className="mx-5 ">
<img  className="rounded-xl  w-12 " src={img} />

</div>
<Outlet />

</div>
       
    )
}