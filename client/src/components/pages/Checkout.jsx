import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Checkout() {
  console.log("Checkout component rendered!");
  /////payment



  const total = useSelector((state) => state.cart.subtotal);
  const [order, setOrder] = useState({});

  const [data, setData] = useState({
    email: "",
    name: "",
    house: "",
    city: "",
    landmark: "",
    pincode: "",
    contact: "",
  });
 const handelchange=(e)=>{
  e.preventDefault();
  const{name,value}=e.target
  if (["pincode", "contact"].includes(name) && isNaN(value)) {
   
    toast.info('Only numbers allowed!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
      return;
  }else{
  setData(prev=>({
    
   
    ...prev,
    [name]:value
  }))

}
 }
 

  const [key, setKey] = useState("");

  useEffect(() => {
    const init = async () => {
      try {
        const response = await axios.post("/api/pay/checkout", {
          amount: total * 100,
          
        });
     
        setOrder(response.data.order);
      } catch (err) {
        console.log(err);
      }
    };
    init();
  }, []);

  toast.error('Some fileds are empty!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
    const payment = async (e) => {

 
      e.preventDefault();
    if(data.city==="" || data.email==="" || data.name===""||data.house ===""|| data.landmark==="" ||data.pincode===""||data.contact==="")
    {
      toast.error('Some fileds are empty!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        })
    }else{
      try {
      
        const value = await axios.get("http://localhost:5000/api/pay/getkey");
        setKey(value.data.key);
    
        console.log(key);
        const options = {
          key,
          amount: order.amount,
          currency: "INR",
          name: "Audiophile",
          description: "Test Transaction",
          image: "../../../public/images/home/desktop/headphone-hero-image.png",
          order_id: order.id,
          callback_url: "http://localhost:5000/api/pay/paymentverification",
          handler: async function (response) {
            console.log('Handler function called');
            try {
              const responses = await axios.post("api/order/add", ({ ordertotal: order.amount, Shipping: data }))
              console.log(responses)
              setData({})
              window.location.href = "http://localhost:5000/api/pay/paymentverification"; // Redirect to the callback URL
            } catch (err) {
              console.log(err)
            }
          },
          
          
       
          prefill: {
            name: "Gaurav Kumar",
            email: "gaurav.kumar@example.com",
            contact: "9000090000",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
          theme:{

          }
          
        };
        
        var rzp1 = new Razorpay(options);
        rzp1.open();
      

        
      
      } catch (err) {
        console.log(err);
      }
    }
    
    };
    

  return (
    <div className=" text-black py-12  mt-20">
      <div className="container mx-auto max-w-screen-md px-4">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <form className="bg-white rounded-lg p-6" onSubmit={payment}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-yellow-600"
              name="email"
              onChange={handelchange}
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
              name="name"
              onChange={handelchange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block font-bold mb-2">
              House No
            </label>
            <input
              id="address"
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-yellow-600"
              name="house"
              onChange={handelchange}
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
              name="city"
              onChange={handelchange}
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
              name="landmark"
              onChange={handelchange}
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
  pattern="[0-9]*"
  title="Please enter only numbers"
  className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-yellow-600"
  name="pincode"
  onChange={handelchange}
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
                pattern="[0-9]*"
                className="w-[100%] px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-yellow-600"
                name="contact"
                onChange={handelchange}
             />
            </div>
          </div>
          <button
            type="submit"
            className="bg-black h-7 font-semibold text-white w-[100%] rounded-xl"
          >
            Proceed to pay:<span className="mx-3">{total}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
