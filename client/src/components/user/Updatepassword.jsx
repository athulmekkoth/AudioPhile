import React from "react";
import { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Updatepassword()
{

    const handleUpdate = async(e) => {
        e.preventDefault();
        try{
        const response = await axios.post("/api/auth/resetpass", {
          email,
          password,
          newpassword,
          confirmpassword
        });
        if(response.status===200)
        {
          console.log("success")
          toast.success('Succesfully changed!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        } // log the response
          
      }
   
       
        catch(error)
        {
         
            console.log(error.response.data); 
         toast.warn(`${error.response.data.message}`, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              })
    };
    
  }     
      const [password,setPassword] = useState();
      const [email, setEmail] = useState();
      const [newpassword, setnewPassword] = useState();
      const [confirmpassword, setconfirmPassword] = useState();
    return(
        <div className="mt-20">
        <form onSubmit={handleUpdate}>
      <div className="my-4 mt-20 mx-20 ">

      <div className="my-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email:
        </label>
        <input
         // type="email"
          id="email"
          
          onChange={(e) => setEmail(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="my-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          id="password"
      
          onChange={(e) => setPassword(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="my-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
        New Password
        </label>
        <input
          type="text"
          id="name"
       
          onChange={(e) => setnewPassword(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="my-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
        Confirm Password
        </label>
        <input
          type="text"
          id="name"
       
          onChange={(e) => setconfirmPassword(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
      
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Update
      </button>
      </div>
    </form>
    </div>
    )
}