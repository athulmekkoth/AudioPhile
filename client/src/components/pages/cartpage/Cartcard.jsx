import React, { useEffect,useState,useRef } from "react";
import axios from "axios";
import  {RiDeleteBin6Line} from "react-icons/ri";
import img from "../../../../public/images//home/desktop/headphone-hero-image.png"

import { useSelector,useDispatch } from "react-redux";
import { FaPlus,FaMinus } from 'react-icons/fa'
import { remove,reset } from "../../redux/cartslice";
import { increment ,decrement} from "../../redux/cartslice";
export default function Cartcard(props)
{
    const it=useSelector((state)=>state.cart)
  

        const[values,setvalue]=useState(props.item.quantity)////


    const quantity=props.item.itemprice / props.item.price
   
  
      

console.log(props.item)
    const dispatch=useDispatch();
    const add=async ()=>{try{
      if(values >=4)
      {
        alert("maximmum order is 4 per one person")
      }else{
      let response = await axios.post("api/cart/update", { itemId: props.item.product,quantity:values+1 });
      if(response.status===200){
        setvalue((prevValue) => prevValue + 1);
          dispatch(increment(props.item.product))

      }
       console.log(response)
        
 
     }
    
     } catch(err)
     {
         console.log(err)
     }
     }


     const sub=async ()=>{
        try {
       if(values>1){
            console.log(values)
            let response1 = await axios.post("api/cart/update", { itemId: props.item.product,quantity:values });
            if (response1.status === 200) {
              console.log("ok");
              setvalue((prevValue) => prevValue - 1);
              dispatch(decrement(props.item.product));
            }
            console.log(response1);
       }
       else{
        console.warn("sorry")
       }
          
        } catch (err) {
          console.log(err);
        }
      }
      
   
    const dele=async()=>{
        console.log("remove")
     
        try{
       
        dispatch(remove(props.item.product))
        
        const response = await axios.delete("/api/cart/rem", { data: { id: props.item.product} });
 
        if(response.status===200)
        {
            console.log("ok")
        }}
        catch(err)
        {
            console.log(err)
        }
       
    }



    console.log(props.item)
        

    return(
        <div className="w-[100%]   ">
        <div className="w-full  bg-neutral-100 text-black rounded-xl lg:w-[88%] flex flex-col gap-5 py-3 ">
           
            <div className="p-11 flex flex-row justify-between items-center mx-11">
            <img   className="w-[40%] lg:w-[10%] rounded-md" src={props.item.photos[0]} />
            <h1 className=" text-3xl">{props.item.name}</h1>
            <h1 className=" text-3xl">{props.item.id}</h1>
         
        
            </div>
            <div className="flex justify-between   lg:flex-row   w-[88%] mx-auto">
                <h2 className="text-gray-400 text-2xl">price:{props.item.itemprice}</h2>
                <span onClick={add}><FaPlus /></span>
<p>{props.item.quantity}</p>
   <span  onClick={sub}><FaMinus /></span>
                <div className="flex  lg:flex-row gap-2 items-center">
                <h2 onClick={dele}className="cursor-pointer"><RiDeleteBin6Line /></h2>
         
</div>
            </div>
        
        </div>
        </div>
  
    )
}