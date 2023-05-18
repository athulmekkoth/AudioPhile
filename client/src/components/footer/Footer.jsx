import React from "react";
import { AiFillFacebook,AiFillTwitterCircle,AiFillInstagram,AiOutlineShoppingCart} from "react-icons/ai";
import { Link } from "react-router-dom";
import img from '../../../public/images/shared/audiophile-logo.svg'
const Footer=()=>{
    return(
        <div className="bg-black pt-9 mt-auto">
            <div className="flex flex-col justify-around gap-5 items-center r lg:flex-row ">

                    <div className="w-[60%]  lg:w-[20%] ">
                    <img   className="w-full mx-auto lg:mx-0" src={img} alt="logo"/>
                    </div>
                    <div>
                    <ul className="text-center text-base text-white">
                        <li className=" text-xl px-4 flex flex-col gap-8 lg:flex-row  ">    
                            <Link  to="/" className="px-3hover:text-yellow-500 duration-1000 ease-out">Home</Link>
                          
                            <Link className=" hover:text-yellow-500 duration-1000">About Us</Link>
                            <Link className=" hover:text-yellow-500 duration-1000">Contact Us</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                <div>
                    ////////////sm media
                <div >
                    <div className="w-[80%]   flex flex-col lg:flex-row justify-between items-center mx-auto gap-4">
                   
                    <div className="text-white pt-7 w-[85%]  text-ellipsis font-extralight  lg:basis-1/2">
                <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music
                     lovers and sound specialists who are devoted to helping you get the most of personal audio.
                      Come and visit our demo facility - we're open 7 days a week.

</p>
           
                    </div>
                    <div  className=" py-7 text-2xl text-white flex  justify-center gap-5">
                    <a
                    target="_blank"
                    rel="noreferrer"
                    href='https://www.facebook.com'>
                           <AiFillFacebook />
                    </a>
                    <a
                    target="_blank"
                    rel="noreferrer"
                    href='https://www.twitter.com'>
                           <AiFillTwitterCircle />
                    </a>
                    <a
                    target="_blank"
                    rel="noreferrer"
                    href='https://www.instagram.com'>
                           <AiFillInstagram />
                    </a>
                    </div>
                </div>
                </div>
                </div>
        <div className="text-white  text-center py-7 lg:py-10">
            <h1>Copyright 2023. All Rights Reserved</h1>
        </div>
            </div>
   
    )

}
export default Footer;