import React, { useEffect, useState } from "react";
import axios from "axios"
export default function Order(){
    const[data,setData]=useState([])
    useEffect(()=>{
        try{
        const data=async()=>{
            const response=await axios.get("/api/order/getall")
            setData(response.data)
            console.log(response)
        }
    }
        catch(err)
        {
            console,log(err)
        }
        data();
    },[])

return(
    <h1 className=" mt-20 bg-red-300 text-3xl" >emfnn</h1>
)
}