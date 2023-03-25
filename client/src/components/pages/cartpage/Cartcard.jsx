import React, { useEffect,useState,useRef } from "react";
import axios from "axios";
import  {RiDeleteBin6Line} from "react-icons/ri";
import img from "../../../../public/images//home/desktop/headphone-hero-image.png"
import Dropdown from 'react-dropdown'
import { useSelector,useDispatch } from "react-redux";
import { remove,reset } from "../../redux/cartslice";
export default function Cartcard(props)
{
    const dispatch=useDispatch();
   
    const dele=async()=>{
        dispatch(remove(props._id))
        console.log(props.item._id)
        const response = await axios.delete("/api/cart/rem", { data: { id: props.item._id } });
 
        if(response.status===200)
        {
            console.log("ok")
        }
       
    }
    const[values,setvalue]=useState(1)


    
        

    return(
        <div className="w-[100%]   ">
        <div className="w-full bg-neutral-100 text-black rounded-xl lg:w-[88%] flex flex-col gap-5 py-3 ">
           
            <div className=" flex flex-row justify-between items-center mx-11">
            <img   className="w-[40%] lg:w-[10%]" src={img} />
            <h1 className=" text-3xl">{props.item.name}</h1>
         
           
            </div>
            <div className="flex  lg:flex-row justify-between lg:justify-between  w-[88%] mx-auto">
                <h2 className="text-gray-400 text-2xl">price:{props.item.itemprice}</h2>
                <div className="flex  lg:flex-row gap-6 items-center">
                <h2 onClick={dele}className="cursor-pointer"><RiDeleteBin6Line /></h2>
         
</div>
            </div>
        
        </div>
        </div>
  
    )
}