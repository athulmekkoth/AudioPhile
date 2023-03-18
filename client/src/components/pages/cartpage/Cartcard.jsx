import React, { useEffect } from "react";
import axios from "axios";

export default function Cartcard()
{
    
    useEffect(()=>
    {
        const fetch=async()=>{
            const response=await axios.get("/api/cart/get")
            console.log(response.data.items)
        }
        fetch();
    },[])

    return(
        <h1 className="text-9xl text-blue-400 mt-20">ekdedk</h1>
    )
}