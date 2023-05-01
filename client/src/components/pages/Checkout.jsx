import React, { useState } from "react"
import { useSelector } from "react-redux"
import axios from "axios"

export default function Checkout()
{
  console.log("Checkout component rendered!")
  /////payment
  
  const total= useSelector((state)=>state.cart.subtotal)
const  [order,setOrder]=useState({})






const  [key,setKey]=useState("")


    const payment=async()=>{
      try{
        console.log('cliked')
        const value=await axios.get("http://localhost:5000/api/pay/getkey")
       setKey(value.data.key)
      const response= await axios.post("/api/pay/checkout",({amount:total}))
      setOrder(response.data.order)
    
      const  options = {
        key,
        amount: order.amount*100,
        currency: "INR",
        name: "Audiophile",
        description: "Test Transaction",
        image: "hhttps://res.cloudinary.com/dccwkrftn/image/upload/v1682784194/audiophile-logo_vriczr.svg",
        order_id: order.id, 
        callback_url: "http://localhost:5000/api/pay/paymentverification",
        prefill: {
            name: "Gaurav Kumar",
            email: "gaurav.kumar@example.com",
            contact: "9000090000"
        },
        notes: {
            address: "Razorpay Corporate Office"
        },
        theme: {
            color: "#3399cc"
        }
    };
    var rzp1 = new Razorpay(options);
   
        rzp1.open();
        e.preventDefault();
    
    
    }      catch(err)
      {
        console.log(err)
      }

  
  

    }

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
                      <button onClick={payment} className="bg-black h-7 font-semibold text-white w-[100%] rounded-xl">Proceed to pay:<span className="mx-3">{total}</span></button>
                    </div>
             
                    </div>
                  
                    
    )
}