import React from "react";
import { FcEmptyTrash } from "react-icons/fc";

export default function Usercard()
{

    return(
        <div className="flex flex-col">
            <div className="w-1/2">
            <h1>Name</h1>
            <h2>cretaed at:</h2>
            <h2>email</h2>
            </div>
            <div>
                <span><FcEmptyTrash/></span>
            <button>View order hsitry</button>
            </div>
            
            
        </div>

    )
}