import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Messages = () => {
    const[msg,setMesg]=useState([])
useEffect(()=>{
    const response=async()=>{
        try{
            const data=await axios.get("/api/mesg/get")
            setMesg(data.data.response)

         
        }
        catch(err)
        {
            console.log(err)
        }
    }
    response()
},[])
const deletes=async(id)=>{
    console.log(id)
    try{
        const response=await axios.delete("/api/mesg/del",{data:{id:id}})
        if(response.status===200)
        {
            toast.warn('sucessfully deleted', {
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
    catch(err)
    {
        console.log(err)
    }

}
  

  return (
    <div>
    {msg?.map((item) => (
      <div className="bg-white rounded-lg shadow-md p-4 mb-4" key={item.id}>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-semibold">Name:{item.name}</h2>
          <button onClick={() => deletes(item._id)}className="text-red-500 hover:text-red-700 focus:outline-none">
            Delete
            
          </button>
        </div>
        <p className="text-gray-600 mb-2">Email{item.email}</p>
        <p>Message{item.message}</p>
      </div>
    ))}
  </div>
      
  );
};

export default Messages;
