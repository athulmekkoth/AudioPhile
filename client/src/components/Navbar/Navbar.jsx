import React from "react";
import cart from "../assets/images/cart.png"
import { TfiMenu } from "react-icons/tfi";
import { AiOutlineCloseCircle} from "react-icons/ai";
export default function Navbar()
{
const [open,setopen]=React.useState(true)
    let Links =[
        {name:"Home" ,link:"/"},
        {name:"Headphone" ,link:"/"},
        {name:"Speaker" ,link:"/"},
        {name:"Earphone"  ,link:"/"},
      
    ]
    const change=()=>{
        setopen(!open)

    }
    return(
    <>
    <div className="  shadow-md w-full fixed top-0 left-0 ">
    <div className="  md:flex items-center bg-black py-4 md:justify-around">
   <div className=" flex justify-between px-3  text-white cursor-pointer font-[Poppins]">audiophile
   <div onClick={change} className=" md:hidden  w-9  ">
    {open ?     <span  className=""><AiOutlineCloseCircle/></span>:    <span  className=""><TfiMenu/></span>}


   </div>
   </div>
   <ul className={`md:flex md:items-center ${open ?"" :"hidden"}  `}>
    {
        Links.map((link)=>(
            <li className='  md:ml-8 text-xl md:my-0 my-7'> 
        <a href={link.link} className='text-white hover:text-yellow-500 duration-500'>{link.name}</a>
        </li>
        ))
        
    }
   </ul>
   <div className>
<img className="absolute top-3 right-20   md:inline-block  w-7 cursor- md:top-5 " src={cart} alt="cart" />
   </div>
   </div>
   </div>
   </>
    )
}

