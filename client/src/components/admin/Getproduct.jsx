import React, { useEffect, useState } from "react";
import Productcard from "./Productcard";
import axios from  "axios"
export default function Getproduct()
{
const[data,setdata]=useState([])
    useEffect(()=>{
        const call= async()=>{
            try{
            const response = await axios.get("/api/product/getall")
       setdata(response.data.data)
       
           
            }
            catch(err)
            {
                console.log(err)
            }

        }
        call()
       
    },[data])

    return(
       
        <div className="">
            {data.map((item)=>{
                return <Productcard items={item} />
            })}


        </div>
    )
}