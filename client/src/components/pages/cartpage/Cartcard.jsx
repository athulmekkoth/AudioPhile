import React, { useEffect,useState,useRef } from "react";
import axios from "axios";
import  {RiDeleteBin6Line} from "react-icons/ri";
import img from "../../../../public/images//home/desktop/headphone-hero-image.png"
import Dropdown from 'react-dropdown'
import { useSelector,useDispatch } from "react-redux";
import { FaPlus,FaMinus } from 'react-icons/fa'
import { remove,reset } from "../../redux/cartslice";
import { increment ,decrement} from "../../redux/cartslice";
export default function Cartcard(props)
{
    console.log(props.item)
    const quantity=props.item.itemprice / props.item.price
    console.log(quantity)
    useEffect(()=>{
        try{
            console.log('called')
        const resposnes=axios.post("api/cart/update",{id:props.item.id,quantity:quantity})
        console.log(resposnes)
        }
        catch(err)
        {
            console.log(err)
        }
    },[quantity])


    const dispatch=useDispatch();
    const add=()=>{
        dispatch(increment(props.item.id))
        setvalue(values=>values+1)
     

    }
    const sub=()=>{try{
       ( values>1 ?  setvalue(values=>values-1)
       :null)
       dispatch(decrement(props.item.id))

    }
    catch(err)
    {
        console.log(err)
    }
    }       
    console.log(props.item.id)
   
   
    const dele=async()=>{
        console.log("remove")
        console.log(props.item.id)
        try{
        dispatch(reset())
        
        const response = await axios.delete("/api/cart/rem", { data: { id: props.item.id } });
 
        if(response.status===200)
        {
            console.log("ok")
        }}
        catch(err)
        {
            console.log(err)
        }
       
    }
    const[values,setvalue]=useState(0)


    
        

    return(
        <div className="w-[100%]   ">
        <div className="w-full bg-neutral-100 text-black rounded-xl lg:w-[88%] flex flex-col gap-5 py-3 ">
           
            <div className=" flex flex-row justify-between items-center mx-11">
            <img   className="w-[40%] lg:w-[10%]" src={img} />
            <h1 className=" text-3xl">{props.item.name}</h1>
         
           
            </div>
            <div className="flex  lg:flex-row justify-between lg:justify-between  w-[88%] mx-auto">
                <h2 className="text-gray-400 text-2xl">price:{props.item.itemprice}</h2>
                <span onClick={add}><FaPlus /></span>
<p>{quantity}</p>
   <span  onClick={sub}><FaMinus /></span>
                <div className="flex  lg:flex-row gap-6 items-center">
                <h2 onClick={dele}className="cursor-pointer"><RiDeleteBin6Line /></h2>
         
</div>
            </div>
        
        </div>
        </div>
  
    )
}