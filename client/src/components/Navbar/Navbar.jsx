import React from "react";
import cart from "../assets/images/cart.png"
import { TfiMenu } from "react-icons/tfi";
import { AiOutlineCloseCircle} from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from "../redux/authslice.js";
import { AiOutlineShoppingCart} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Navbar()
{
    const dispatch=useDispatch();
    const log=async()=>{
        console.log("clicled")
        dispatch(logOut())
        


    }
    const {currentUser}=useSelector((state)=>state.user)
    console.log(currentUser)
    const [open,setopen]=React.useState(false)

    let Links =[
        {name:"Home" ,link:"/"},

        {name:"Headphone" ,link:"/head"},
        {name:"Speaker" ,link:"/speak"},
        {name:"Earphone"  ,link:"/ear"},
      
    ]
    const change=()=>{
        setopen(!open)

    }
    return(
    < >
   <div className="bg-red-500 h-12">
    <div className=" z-5000 fixed shadow-md w-full  top-0 left-0 ">
    <div className="  lg:flex  bg-black py-4 md:justify-around items-center">
   <div className=" text-2xl flex justify-between px-3 pt-2  text-white cursor-pointer font-[Poppins]">audiophile
   <div onClick={change} className=" lg:hidden  w-9 inline-block  ">
    {open ?     <span  className=""><AiOutlineCloseCircle/></span>:    <span  className=""><TfiMenu/></span>}


   </div>
   </div>
   <ul className={`lg:flex md:items-center ${open ?"" :"hidden"}  `}>
    {
        Links.map((link)=>(
            <li className='  my-7  ml-8 text-xl '> 
        <a href={link.link} className='text-white hover:text-yellow-500 duration-1000'>{link.name}</a>
        </li>
        ))
        
    }
   </ul>

   <div className = "text-white text-4xl">
   { currentUser? <button  onClick={log} className=" bg-white w-9 h-10 text-yellow-300 text-xl">LOgout</button>:"" }
<button onClick={()=>{ <Link to="/cart" ></Link>  }} className="absolute right-20   w-7 cursor- top-5 lg:flex items-center " ><AiOutlineShoppingCart /></button>

   </div>
   </div>
   </div>
   </div>
   </>
    )
}

