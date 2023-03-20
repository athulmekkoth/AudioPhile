import React from "react"
export default function Checkout()
{
    return(
       <div  className="mt-28 w-[100%] ">
        <div className="py-12 bg-neutral-100   w-[60%] h-10 mx-auto">
            <form className="mx-auto text-center flex flex-col items-start ">
                <label className="ml-4 text-xl font-mono">Email Adress</label>
                <input className="w-[90%] h-10 rounded-2xl" type="text" />
            </form>

        </div>
        
       </div>
    )
}