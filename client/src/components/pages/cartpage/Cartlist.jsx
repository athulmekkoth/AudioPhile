
import Cartcard from "./Cartcard";
import { useEffect,useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import { useSelector } from "react-redux";
export default function Cartlist()

{
  const state = useSelector(state => state);
  
  /*  const[data,setdata]=useState([])
    const[price,setprice]=useState()
    useEffect(()=>
    {
        const fetch=async()=>{
            const response=await axios.get("/api/cart/get")

 setprice(response.data.total)

            setdata(response.data.items)
        
        }
        fetch();
    },[])*/
   const data=useSelector((state)=>state.cart)
   console.log(data)
   
    return (
     <div className="flex  flex-col lg:flex-row  mx-2 lg:mx-10">
        <div className="mt-20 gap-4 flex flex-col  lg:w-[80%]">
        {data && data.map((item) => (
    <Cartcard key={item.id} item={item} />
))}
</div>
<div className="mx-auto h-48 bg-neutral-100 mt-20 w-[100%] lg:w-[20%] flex flex-col justify-center items-center gap-2 rounded-lg">
<h1 className=" text-3xl text-black font-mono">Subtototal:</h1>
<Link className="" to="/checkout" >
<button className="bg-yellow-300 w-[100%] rounded-xl h-9">Proceed</button>
</Link>
</div>
</div>
      );
          }      