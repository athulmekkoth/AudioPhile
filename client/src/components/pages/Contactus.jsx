import React from "react"
import { useSelector } from "react-redux";
import {Link, Outlet} from "react-router-dom"

export default function Contactus()
{
return(
   
        

 
      <div className="mt-24  text-gray-400 text-center">
       <h1>Have any question? We will get back to you</h1>
       <div>
       <label htmlFor="name" className="">NAME</label>
       <input type="text" placeholder="name" id="name" />
       </div>
       <div>
       <label htmlFor="email" className="">Email</label>
       <input type="text" placeholder="name" id="name" />
       </div>
       <div>
       <label htmlFor="name" className="">Message</label>
       <input type="text" placeholder="name" id="name" />
       </div>
      </div>



)
    

}