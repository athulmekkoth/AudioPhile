import React from "react";
import { Link } from "react-router-dom";
import img from "/images/shared/audiophile-logo.svg";
import axios from "axios"
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { loginStart,loginSuccess,loginFailed } from "../redux/authslice.js";
import {signInWithPopup} from "firebase/auth"
import {auth,provider} from "./firebase.js"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const[cpass,setCPassword]=useState("")

const handleClick = async () => {
  
  try {
    const response = await signInWithPopup(auth, provider);
    console.log(response.user.displayName);
  } catch (error) {
    console.log(error);
  }
};


const handleSubmit = async (event) => {
  event.preventDefault();

  console.log(name.length)
    try {
      if(password.length < 8)
      {
        alert("password should be atelast 8 characters")
      }
      else if(cpass!=password)
      {
        toast.warn('Password dosent match each other!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });

      }
      else{
      const response = await axios.post("/api/auth/signup", { name, email, password });
  
console.log(response.status)
      dispatch(loginStart());
 
      if(response.status === 200)
      {
        dispatch(loginSuccess(response.data));

        navigate('/')
toast.success('sucesss!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });

      }
    }
      
    } catch (err) {
      dispatch(loginFailed())
      if (err.response.status === 409) {
        toast.warn('user mail id exist', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
    }
  
  
}


const passwordRegex = /^(?=(.*[a-z]){3,})(?=(.*[A-Z]){2,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/;

function validatePassword(password) {
  return passwordRegex.test(password);
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
                     <label>confirm password</label>
              <input   className="border-2 h-9  rounded-xl border-slate-700"
               name="cpassword" 
               placeholder="password" 
               type="password"
            onChange={(e)=>setCPassword(e.target.value)} 
            />   
            </form>
            <div className="w-full  pb-5 flex flex-col justify-center items-center">
                <button onClick={handleSubmit} className="bg-black w-[70%] h-8 rounded-xl text-white font-thin " >Create an Account</button>
                <Link to="/login" className="">Already have a account? <span className="hover:text-yellow-500g">Login</span></Link>
            </div>
       <button onClick={handleClick}>sing in ith google</button>
          </div>
        </div>
     
    
  );
};
export default Signup;
