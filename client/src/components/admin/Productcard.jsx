import React from "react";
import img from "../../../public/images/shared/man-headerphone.png"
import { RiDeleteBin2Line } from "react-icons/ri";
import axios from "axios"
import {Link, Outlet} from "react-router-dom"
import { remove } from "../redux/Adminslice";
import { Dispatch } from "react";
import { useSelector,useDispatch } from "react-redux";
export default function Productcard(props)
{
const dispatch=useDispatch()
const del=async()=>{
    try{
 
    console.log(props.items._id)
    dispatch(remove(props.items._id))
    
    const response = await axios.delete("/api/product/del", { data: { id: props.items._id } });

  console.log(response)
    }
 catch(err)
    {console.log(err)

    }


}

  
    return(
        <div className="bg-black w-[80%] mx-auto flex flex-row justify-between my-4 py-4 rounded-lg">
            <div  className="flex-col mx-5 flex  mt-5  lg:text-2xl lg:w-[70%] items-start lg:mx-12">
   
   <h1  className="my-3">Name:{props.items.name}</h1>
   <h1  className="my-3">Category:{props.items.category}</h1>
   <h1  className="my-3">Instock:{props.items.count}</h1>

   <h1  className="my-3">Price:{props.items.price}</h1>
   <Link to={`/admin/updateproduct/${props.items._id}`}>

<button  className="bg-gray-700 w-[100%] rounded-md hover:animate-pulse">Update product</button></Link>

   </div>
<div className="mx-5 flex flex-col justify-between my-4  ">
<img  className="rounded-xl  w-32 " src={img} />

<span onClick={del}  className="mx-5 cursor-pointer"><RiDeleteBin2Line/></span>
</div>


</div>
       
    )
}