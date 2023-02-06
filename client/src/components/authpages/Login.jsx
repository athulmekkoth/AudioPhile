import React from "react";
import { Link } from "react-router-dom";
import img from "../../../public/images/shared/audiophile-logo.svg";
const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
     
        <div className="w-[30%] my-auto mx-auto  text-left border-2 rounded-md border-black">
          <div className=" mt-5  text-center w-full h-9 ">
          <h1 className="text-4xl font-semibold font-mono">audiophile</h1>
          </div>
          
            <form className="flex gap-5 flex-col w-[70%] mx-auto py-7">
                
              <label>Email</label>
              <input name="email"
                       className="border-2 h-9  border-slate-700 rounded-xl"
                        placeholder="email"
                         type="email" />
              <label>Password</label>
              <input   className="border-2 h-9  rounded-xl border-slate-700"
               name="password" 
               placeholder="password" 
               type="password" />
            </form>
            <div className="w-full  pb-5 flex flex-col justify-center items-center">
                <button className="bg-black w-[70%] h-8 rounded-xl text-white font-thin " >Login</button>
                <Link to="/signup" className="">First time user? <span className="text-violet-400 hover:text-yellow-500g">Cretae an Account</span></Link>

            </div>
       
          </div>
        </div>
     
    
  );
};
export default Login;
