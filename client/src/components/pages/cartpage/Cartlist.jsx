
import Cartcard from "./Cartcard";
import { useEffect,useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import { useSelector } from "react-redux";
export default function Cartlist()

{
  const values= useSelector((state)=>state.cart.items)
  const user= useSelector((state)=>state.user.currentUser)
  const total= useSelector((state)=>state.cart.subtotal)
const get=()=>{
  console.log(values)
}
  
    const[data,setdata]=useState([])
    const[price,setprice]=useState()
    useEffect(()=>
    {
        const fetch=async()=>{
            const response=await axios.get("/api/cart/get")

 setprice(response.data.total)

            setdata(response.data.items)
        
        }
        fetch();
    },[])
  
 
   
    return (
        (values  && user!=null ?
            <div className="flex  flex-col lg:flex-row  mx-2 lg:mx-10">
            <div className="mt-20 gap-4 flex flex-col  lg:w-[80%]">
            {values && values.map((item) => (
        <Cartcard key={item.id} item={item} />
    ))}
    </div>
    <div className="mx-auto h-48 bg-neutral-100 mt-20 w-[100%] lg:w-[20%] flex flex-col justify-center items-center gap-2 rounded-lg">
    <h1 className=" text-3xl text-black font-mono">Subtototal:{total}</h1>
    <button className="bg-red-400 w-16 h-10" onClick={get}>click me</button>
    <Link className="" to="/checkout" >
    <button className="bg-yellow-300 w-[100%] rounded-xl h-9">Proceed</button>
    </Link>
    </div>
    </div> :
   <div className="mt-20 text-center">
   <h1 className="text-6xl text-gray-500 font-bold">Welcome!</h1>
   <p className="text-lg text-gray-500 mb-6">It looks like you're not logged in yet.</p>
   <div className="flex justify-center space-x-4">
     <Link to="/login">
       <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
         Login
       </button>
     </Link>
     <Link to="/signup">
       <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded">
         Sign up
       </button>
     </Link>

   </div>
 </div>
 
            
            )
   
      );
          }      