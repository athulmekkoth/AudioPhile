import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import { useState, } from "react";

export default function Updateproduct(props) {
  const {id}=useParams()
  const [datas, setDatas] = useState({});

  useEffect(()=>{
    const getdata=async()=>{
      try{
      const response=await axios.get(`/api/product/find/${id}`)
     console.log(response)
      console.log("rendered")
      setDatas(response.data);}
      catch(err)
      {
        console.log(err)
      }
    }
  getdata()

  },[id])



  return (
    
    <div>
    {datas ? (
<div className="mt-12 w-[60%] mx-auto border-2 border-black rounded-xl" > 
<div className="py-4">
  <label className="pl-4 block text-start md:pl-14 text-2xl text-black" htmlFor="demo1">Category</label>
  <input id="demo1"className="border-2 border-gray-200 h-8 r w-[90%]"       defaultValue={datas.exist?.category || ""} name="category" />
</div>

<div className="py-4">
  <label className="pl-4 block text-start md:pl-14 text-2xl text-black" htmlFor="price">Name</label>
  <input id="price"className="border-2 border-gray-200 h-8 r w-[90%]"  defaultValue={datas.exist?.name || ""}  name="price" />
</div>
<div className="py-4">
  <label className="pl-4 block text-start md:pl-14 text-2xl text-black" htmlFor="demo1">Description</label>
  <input id="demo1"className="border-2 border-gray-200 h-8 r w-[90%]"  defaultValue={datas.exist?.description
 || ""}  name="category" />
</div>
<div className="py-4">
  <label className="pl-4 block text-start md:pl-14 text-2xl text-black" htmlFor="demo1">Ctaegory</label>
  <input id="Description"className="border-2 border-gray-200 h-8 r w-[90%]"  defaultValue={datas.exist?.count
 || ""} name="Description" />
</div>
<div className="py-4">
  <label className="pl-4 block text-start md:pl-14 text-2xl text-black" htmlFor="demo1">Price</label>
  <input id="demo1"className="border-2 border-gray-200 h-8 r w-[90%]" defaultValue={datas.exist?.price
 || ""} name="category" />
</div>
<button>Update Now</button>
</div>
    ) : (
      <div> loding</div>
    
    )}
    </div>
  );
}

