import React from "react";
import cart from "../assets/images/cart.png"
import { TfiMenu } from "react-icons/tfi";
import { AiOutlineCloseCircle} from "react-icons/ai";
export default function Navbar()
{
const [open,setopen]=React.useState(false)
    let Links =[
        {name:"Home" ,link:"/"},
        {name:"Headphone" ,link:"/"},
        {name:"Speaker" ,link:"earphones"},
        {name:"Earphone"  ,link:"/"},
      
    ]
    const change=()=>{
        setopen(!open)

    }
    return(
    <>
    <div className=" z-5000 fixed shadow-md w-full  top-0 left-0 ">
    <div className="  lg:flex items-center bg-black py-4 md:justify-around">
   <div className=" flex justify-between px-3 pt-2  text-white cursor-pointer font-[Poppins]">audiophile
   <div onClick={change} className=" lg:hidden  w-9 inline-block  ">
    {open ?     <span  className=""><AiOutlineCloseCircle/></span>:    <span  className=""><TfiMenu/></span>}


   </div>
   </div>
   <ul className={`lg:flex md:items-center ${open ?"" :"hidden"}  `}>
    {
        Links.map((link)=>(
            <li className='  my-7  ml-8 text-xl '> 
        <a href={link.link} className='text-white hover:text-yellow-500 duration-500'>{link.name}</a>
        </li>
        ))
        
    }
   </ul>
   <div className>
<img className="absolute right-20   md:inline-block  w-7 cursor- top-5 " src={cart} alt="cart" />
   </div>
   </div>
   </div>
   </>
    )
}

