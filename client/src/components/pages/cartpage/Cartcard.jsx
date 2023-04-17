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
    const it=useSelector((state)=>state.cart)
    console.log(it)

        const[values,setvalue]=useState(0)

    const quantity=props.item.itemprice / props.item.price
   
    useEffect(() => {
        const fetchData = async () => {
          try {
            console.log('called');
        
            
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
      }, [values]);
      

console.log(props.item)
    const dispatch=useDispatch();
    const add=async ()=>{try{

          setvalue(values=>values+1)
          dispatch(increment(props.item.product))

       let response = await axios.post("api/cart/update", { id: props.item.product,quantity:values });
       console.log(response)
        
 
     }
     catch(err)
     {
         console.log(err)
     }
     }

     const sub=async ()=>{
        try {
       
            console.log(values)
            setvalue(values => values-1);
            dispatch(decrement(props.item.product));
            let response = await axios.post("api/cart/update", { id: props.item.product, quantity: values });
            console.log(response);
          
        } catch (err) {
          console.log(err);
        }
      }
      
   
    const dele=async()=>{
        console.log("remove")
        console.log(props.item.product)
        try{
        dispatch(reset())
        
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



    
        

    return(
        <div className="w-[100%]   ">
        <div className="w-full bg-neutral-100 text-black rounded-xl lg:w-[88%] flex flex-col gap-5 py-3 ">
           
            <div className=" flex flex-row justify-between items-center mx-11">
            <img   className="w-[40%] lg:w-[10%]" src={img} />
            <h1 className=" text-3xl">{props.item.name}</h1>
            <h1 className=" text-3xl">{props.item.id}</h1>
         
        
            </div>
            <div className="flex  lg:flex-row justify-between lg:justify-between  w-[88%] mx-auto">
                <h2 className="text-gray-400 text-2xl">price:{props.item.itemprice}</h2>
                <span onClick={add}><FaPlus /></span>
<p>{props.item.quantity}</p>
   <span  onClick={sub}><FaMinus /></span>
                <div className="flex  lg:flex-row gap-6 items-center">
                <h2 onClick={dele}className="cursor-pointer"><RiDeleteBin6Line /></h2>
         
</div>
            </div>
        
        </div>
        </div>
  
    )
}