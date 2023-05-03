import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
export default function Paymentsuccess()
{
    const search=useSearchParams()[0]
const reference=search.get("reference")

   
    return(
        <div className="mt- m-32">
        <div className="mx-auto my-auto w-[80%]   text-center">
        <h1 className=" text-3xl">Order Sucessful</h1>
        <p>Reference no:{reference}</p>
  <button className="bg-blue-400 rounded-xl w-1/5 mt-3 py-3 transition-property: box-shadow  transition-duration: 150ms">Go to Orderes</button>
        </div>
        </div>
    )
}