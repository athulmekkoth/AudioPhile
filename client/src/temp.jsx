import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from "../redux/authslice.js";
import { AiOutlineCloseCircle, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import cart from "../assets/images/cart.png";
import { TfiMenu } from "react-icons/tfi";
import axios from "axios";
export default function Navbar()
{
  const [on, setOn] = React.useState(false);

  const handleOpen = () => {
    console.log(on)
    setOn(!on);
  };
    const [searchresult,setsearchresult]=useState([])
    const[val,setval]=useState("")
    useEffect(() => {
        const search = async () => {
          try {
            if (val.trim()) {
              const response = await axios.get(`api/product/all?page=${val}` );
              if (response.data) {
                console.log(response.data);
                setsearchresult(response.data);
              } else {
                setsearchresult([]);
              }
            } else {
              setsearchresult([]);
            }
          } catch (err) {
            console.log(err);
          }
        };
        search();
      }, [val]);
      
      
      
    const dispatch=useDispatch();
    const log=async()=>{
        console.log("clicled")
        dispatch(logOut())
        


    }
    const {currentUser}=useSelector((state)=>state.user)
   
    const [open,setopen]=React.useState(false)

    let authLink = currentUser ? 
  { name: "Logout" ,onclick:log} 
  : { name: "Login", link: "/login" };

  let activity = currentUser ? { name: "My Account", link: "/myaccount" } : null;

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
 
   <div className="bg-black   h-12">

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
        <a href={link.link} className='text-white  hover:text-yellow-500 duration-1000'>{link.name}</a>
        </li>
        ))
        
    }
   </ul>

   <Link to="/cart">
  <button className="text-white cursor-pointer text-2xl lg:flex items-center">
    <AiOutlineShoppingCart />
  </button>
</Link>
   </div>
   <div className="mt-6  lg:mt-1 bg-black  flex justify-center items-center   " > 
        <form>
        <input 
        className="  rounded-lg h-8 lg:w-72"  
        type="text"
        placeholder="searching"
        value={val}
        onChange={(e)=>setval(e.target.value)}
        
        />
        
    
        </form>
        <button  className="bg-white  w-10 h-6 border-gray-600"> <AiOutlineSearch/></button>
       
   

    </div>
   </div>
   </div>
   </>
    )
}

