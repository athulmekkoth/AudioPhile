import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Ordercard";
import { useSelector } from "react-redux";

export default function Orders(){
    const user=useSelector((state)=>state.user.isAdmin)
  
    const[data,setData]=useState([])
    useEffect(()=>{
     
            const response=async()=>{
                try{
              let url;
                    if(user)
                    {
                        url="/api/order/getall"

                    }
                    else{
                        url="/api/order/get"
                    }
                const res=await axios.get(url)
                setData(res.data.response)
                console.log(res.data.response)
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