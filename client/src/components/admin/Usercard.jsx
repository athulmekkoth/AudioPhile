import React from "react";
import { FcEmptyTrash } from "react-icons/fc";

export default function Usercard()
{

    return(
        <div className="py-4 flex flex-col w-3/4 bg-black rounded-xl text-white mx-auto mt-10">
            <div className=" flex gap-3 justify-between px6 text-2xl w-[90%] mx-auto">
            <h1>Name</h1>
            <h2>Cretaed at:</h2>
            <h2>Email</h2>
            </div>
            <div className="py-7 mt-3  text-2xl flex justify-between align-center w-[90%] mx-auto">
            <button className="bg-blue-500 rounded-lg px-3 py-2 hover:scale-105">View order History</button>
                <span><FcEmptyTrash/></span>
           
            </div>
            
            
        </div>

    )
}