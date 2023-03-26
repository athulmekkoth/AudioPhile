import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Updatepassword()
{

    const handleUpdate = (e) => {
        e.preventDefault();
        try{
        const response =axios.post("/api/auth/signup",(email,password,newpassword,confirmpassword))
        }
        catch(error)
        {
            console.log(error)
        }  
    };
    
     
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