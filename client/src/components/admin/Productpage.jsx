import React from "react";
export default function Productpage()
{
    const handlesumit =async()=>[

    ]
    return(
        <div className="mt-10 " >
          <form className="flex flex-col gap-4 "> 
          <div className="flex flex-row 0 justify-around " >
          <label htmlFor="name" className="text-black text-3xl border-gray-500-di">Name</label>
            <input type="text" 
           
            className="h-10  rounded-xl border border-gray-400 w-[60%]   "
            id="name"
            />
          </div>
    
    <fieldset className="mb-4 ">
      <legend className="text-black text-3xl border-gray-500-di">Category</legend>

      <ul className="flex flex-row justify-around">
        <li>
          <label className="flex flex-col items-center">
            <input type="radio" name="category" value="headphones" className="sr-only" />
            <span className="h-10 w-60 rounded-xl border border-gray-400 flex items-center justify-center cursor-pointer hover:bg-gray-100">
              Headphones
            </span>
          </label>
        </li>
        <li>
          <label className="flex flex-col items-center">
            <input type="radio" name="category" value="earphones" className="sr-only" />
            <span className="h-10 w-60 rounded-xl border border-gray-400 flex items-center justify-center cursor-pointer hover:bg-gray-100">
              Earphones
            </span>
          </label>
        </li>
        <li>
          <label className="flex flex-col items-center">
            <input type="radio" name="category" value="speakers" className="sr-only" />
            <span className="h-10 w-60 rounded-xl border border-gray-400 flex items-center justify-center cursor-pointer hover:bg-gray-100">
              Speakers
            </span>
          </label>
        </li>
      </ul>
    </fieldset>
  



          <div className="flex flex-row 0 justify-around " >
          <label htmlFor="count" className="text-black text-3xl border-gray-500-di">Count</label>
            <input type="text" 
            name="count"
            className="h-10  rounded-xl border border-gray-400 w-[60%]   "
            id="count"
            />
          </div>
          <div className="flex flex-row 0 justify-around " >
          <label htmlFor="price" className="text-black text-3xl border-gray-500-di">Price</label>
            <input type="text" 
            
            className="h-10  rounded-xl border border-gray-400 w-[60%]   "
            id="price"
            />
          </div>
          <div className="flex flex-row 0 justify-around " >
          <label htmlFor="desc" className="text-black text-3xl border-gray-500-di">Price</label>
            <input type="text" 
            name="desc"
            className="h-10  rounded-xl border border-gray-400 w-[60%]   "
            id="name"
            />
          </div>
            </form>
        </div>

)
}