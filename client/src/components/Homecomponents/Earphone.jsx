
import React from "react"
import earphone from '../../../public/images/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'
export default function Earphone()
{
    return(
        <div className="mt-4 w-full  ">
            <div className=" flex flex-col  flex- items-center   w-[95%]  ">
                <img className="  rounded-xl w-32  flex-[0.5]   "  src={earphone} alt="speaker"/> 
        
                    <div className=" text-center rounded-xl bg-neutral-00  py-20 ">
                        <div className="mx-6">
                         <h2 className=" text-3xl font-semibold mb-6">YX1 Earphones</h2>
                         <button className="text-orange-400 hover:text-orange-800 hover:scale-75 ease-in duration-500"> shop</button>
                        </div>
                 </div>
              </div>
        </div> 

    )
}