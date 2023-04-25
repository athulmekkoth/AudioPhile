import React, { useState } from "react";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Productpage()
{

  const [name,Setname]=useState("")
  const [category, setCategory] = useState("");
  const [count,Setcount]=useState()
  const [price,Setprice]=useState()
  const [description,Setdesc]=useState("")
  const [files, setFiles] = useState([]);

const handleFileChange = (files) => {
  setFiles(Array.from(files));
};
const handlesumit = async(event) => {
  event.preventDefault();

  const formData = new FormData();
  formData.append('name', name);
  formData.append('category', category);
  formData.append('count', count);
  formData.append('price', price);
  formData.append('description', description);
  for (let i = 0; i < files.length; i++) {
    formData.append('files', files[i]);
  }

  try {
    const response = await axios.post("/api/product/addpic", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log(response.status);
  }
  /*
          const response = await axios.post("/api/product/add",{name:name,category:category,  count: Number(count),
 price: Number(price),description:description})
 console.log(response.status);
  }*/
  catch(err) {
    if(err.response.status === 503) {
      toast.success('Already added in cart!', {
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


    return(
        <div className="mt-10 " >
          <form onSubmit={handlesumit} className="flex flex-col gap-4 "> 
          <div className="flex flex-row 0 justify-around " >
          <label htmlFor="name" className="text-black text-3xl border-gray-500-di">Name</label>
            <input type="text" 
           
            className="h-10  rounded-xl border border-gray-400 w-[60%]   "
            id="name"
            onChange={(e)=>Setname(e.target.value)}
            />
          </div>
    
    <fieldset className="mb-4 ">
      <legend className="text-black text-3xl border-gray-500-di">Category</legend>

      <ul className="flex flex-row justify-around">
        <li>
          <label className="flex flex-col items-center">
            <input type="radio" name="category" value="headphones" className="sr-only"  checked={category === "headphones"}   onChange={(e)=>setCategory(e.target.value)}
/>
            <span className="h-10 w-60 rounded-xl border border-gray-400 flex items-center justify-center cursor-pointer hover:bg-gray-100 active:bg-red-500">
              Headphones
            </span>
          </label>
        </li>
        <li>
          <label className="flex flex-col items-center">
            <input type="radio" name="category" value="earphones" className="sr-only" checked={category === "Earphones"}   onChange={(e)=>setCategory(e.target.value)} />
            <span className="h-10 w-60  rounded-xl border border-gray-400 flex items-center justify-center cursor-pointer hover:bg-gray-100 ">
              Earphones
            </span>
          </label>
        </li>
        <li>
          <label className="flex flex-col items-center">
            <input type="radio" name="category" value="speakers" className="sr-only" checked={category === "Speakers"}   onChange={(e)=>setCategory(e.target.value)} />
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
            onChange={(e)=>Setcount(Number(e.target.value))}
            />
          </div>
          <div className="flex flex-row 0 justify-around " >
          <label htmlFor="price" className="text-black text-3xl border-gray-500-di">Price</label>
            <input type="text" 
            
            className="h-10  rounded-xl border border-gray-400 w-[60%]   "
            id="price"
            onChange={(e)=>Setprice(Number(e.target.value))}
            />
          </div>
          <div className="flex flex-row 0 justify-around " >
          <label htmlFor="desc" className="text-black text-3xl border-gray-500-di">Description</label>
            <input type="text" 
            name="desc"
            className="h-10  rounded-xl border border-gray-400 w-[60%]   "
            id="desc"
            onChange={(e)=>Setdesc(e.target.value)}
            />
          </div>
          <div className="flex flex-row  justify-between mx-28" >

          <label  className="text-black text-3xl border-gray-500-di">Images</label>
          <input type="file" name="files" multiple onChange={(e) => handleFileChange(e.target.files)} />
            
          </div>
         
          <input type="submit" className="bg-blue-500 w-20 h-11 mx-auto rounded-2xl mb-5" /> 


            </form>
            
        </div>

)
}