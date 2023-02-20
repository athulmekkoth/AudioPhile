import React from "react";
import { Link } from "react-router-dom";
import img from "../../../public/images/shared/audiophile-logo.svg";
import axios from "axios"
import { useState } from "react";




const Signup = () => {
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const handleSubmit = async (event) => {
  event.preventDefault();

  
    try {
      const response = await axios.post("/api/auth/signup", { name, email, password });

      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  
}
  return (
    <div className="w-full h-screen flex justify-center items-center">
     
        <div className="w-[90%] my-auto mx-auto  text-left border-2 rounded-md border-black lg:w-[30%]">
          <div className=" mt-5  text-center w-full h-9 ">
          <h1 className="text-4xl font-semibold font-mono">audiophile</h1>
          </div>
          
            <form className="flex gap-5 flex-col w-[70%] mx-auto py-7">
              <label>Name</label>
              <input
                className="border-2 h-9  border-slate-700 rounded-xl"
                name="name"
                placeholder="name"
                type="text"
             onChange={(e)=>setName(e.target.value)}
              />
              <label>Email</label>
              <input name="email"
                       className="border-2 h-9  border-slate-700 rounded-xl"
                        placeholder="email"
                         type="email"
                         onChange={(e)=>setEmail(e.target.value)}
                          />
                            
              <label>Password</label>
              <input   className="border-2 h-9  rounded-xl border-slate-700"
               name="password" 
               placeholder="password" 
               type="password"
            onChange={(e)=>setPassword(e.target.value)} 
            />
                    
            </form>
            <div className="w-full  pb-5 flex flex-col justify-center items-center">
                <button onClick={handleSubmit} className="bg-black w-[70%] h-8 rounded-xl text-white font-thin " >Create an Account</button>
                <Link to="/login" className="">Already have a account? <span className="hover:text-yellow-500g">Login</span></Link>
            </div>
       
          </div>
        </div>
     
    
  );
};
export default Signup;
