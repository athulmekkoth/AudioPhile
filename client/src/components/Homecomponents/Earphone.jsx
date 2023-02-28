
import React from "react"
import { Link } from "react-router-dom";
export default function Earphone(props)
{
    return(
        <div className="mt-4 w-full  ">
            <div className=" flex flex-col  flex- items-center   w-[95%]  ">
                <img className="  rounded-xl w-32  flex-[0.5]   "  src={props.img} alt="speaker"/> 
        
                    <div className=" text-center rounded-xl bg-neutral-00  py-20 ">
                        <div className="mx-6">
                         <h2 className=" text-3xl font-semibold mb-6">{props.name}</h2>
                         <Link to={props.link}>
                         <button   className= "text-2xl text-orange-400 hover:text-orange-800 hover:scale-110 ease-linear duration-500"> shop</button>
                         </Link>
                        
                        </div>
                 </div>
              </div>
        </div> 

    )
}