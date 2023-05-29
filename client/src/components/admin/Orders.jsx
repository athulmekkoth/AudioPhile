import React, { useEffect, useState } from "react";
import axios from "axios";


export default function Orders(){

    const[data,setData]=useState([])
    useEffect(()=>{
        
            const response=async()=>{
                try{
                const res=await axios.get("/api/order/getall")
                setData(res.data)
                console.log(res.data)
            }
      catch(err)
        {
            console.log(err)
        }
    }
    response()
    },[])
    
    return (
        <div>
          {data.map((item) => {
            return <Card item={item} />;
          })}
        </div>
      );
        }      