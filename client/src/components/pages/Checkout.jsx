import React from "react"
export default function Checkout()
{
    
          return (
            <div className=" text-black py-12  mt-20">
              <div className="container mx-auto max-w-screen-md px-4">
                <h1 className="text-3xl font-bold mb-8">Checkout</h1>
                <form className="bg-white rounded-lg p-6">
                  <div className="mb-4">
                    <label htmlFor="email" className="block font-bold mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-yellow-600"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="name" className="block font-bold mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-yellow-600"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="address" className="block font-bold mb-2">
                      Address
                    </label>
                    <input
                      id="address"
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-yellow-600"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="city" className="block font-bold mb-2">
                      City
                    </label>
                    <input
                      id="city"
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-yellow-600"
                      />
                   
                      </div>
                      <div className="mb-4">
                    <label htmlFor="Landmark" className="block font-bold mb-2">
                    Landmark
                    </label>
                    <input
                      id="Landmark"
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-yellow-600"
                      />
                   
                      </div>
                    <div className=" flex justify-between gap-20 ">
                    <div className="mb-4">
                    <label htmlFor="pincode" className="block font-bold mb-2">
                    pincode
                    </label>
                    <input
                      id="pincode"
                      type="text"
                      className=" w-[100%] px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-yellow-600"
                      />
                      </div>
                      <div className="mb-4  w-2/3">
                    <label htmlFor="Mobile-number" className="block font-bold mb-2">
                    Mobile-number
                    </label>
                    <input
                      id="Mobile-number"
                      type="text"
                      placeholder="+91"
                      className="w-[100%] px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-yellow-600"
                      />
                      </div>
                    </div>
                      </form>
                      <button className="bg-black h-7 font-semibold text-white w-[100%] rounded-xl">Proceed to pay</button>
                    </div>
             
                    </div>
                  
                    
    )
}