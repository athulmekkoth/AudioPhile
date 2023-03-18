
import Cartcard from "./Cartcard";
import { useEffect,useState } from "react";
import axios from "axios";
export default function Cartlist()

{
    const[data,setdata]=useState([])
    useEffect(()=>
    {
        const fetch=async()=>{
            const response=await axios.get("/api/cart/get")
 
            setdata(response.data.items)
            console.log(data)
        }
        fetch();
    },[])
    {data.map((item)=>{
        console.log(item)
    })}
    return(
      
    <Cartcard />
)}