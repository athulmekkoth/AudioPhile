import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import { useState, } from "react";

export default function Updateproduct(props) {
  const {id}=useParams()
  const [datas, setDatas] = useState({});

  const [name,Setname]=useState("")
  const [category, setCategory] = useState("");
  const [count,Setcount]=useState()
  const [price,Setprice]=useState()
  const [description,Setdesc]=useState("")
  const [ids,Setid]=useState("")
  const [files, setFiles] = useState([]);
 
  useEffect(()=>{
    const getdata=async()=>{
      try{
      const response=await axios.get(`/api/product/find/${id}`)
     
      
      setDatas(response.data);
      Setid(response.data.exist._id)}
      catch(err)
      {
        console.log(err)
      }
    }
  getdata()

  },[id])



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
  formData.append('ids', id);
  for (let i = 0; i < files.length; i++) {
    formData.append('files', files[i]);
    
  }

  try {
    console.log(files)
 
    const response = await axios.post("/api/product/update", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  if(response.status===200){
    toast.success('sucessfully added product!', {
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
    {datas ? (
<div className="mt-12 w-[60%] mx-auto border-2 border-black rounded-xl" > 
<div className="py-4">
  <label className="pl-4 block text-start md:pl-14 text-2xl text-black" htmlFor="demo1">Category</label>
  <input id="demo1"className="border-2 border-gray-200 h-8 r w-[90%]"       defaultValue={datas.exist?.category || ""} name="category"  onChange={(e)=>setCategory(e.target.value)} />
</div>

<div className="py-4">
  <label className="pl-4 block text-start md:pl-14 text-2xl text-black" htmlFor="price">Name</label>
  <input id="price"className="border-2 border-gray-200 h-8 r w-[90%]"  defaultValue={datas.exist?.name || ""}  name="name"   onChange={(e)=>Setname(e.target.value)}/>
</div>
<div className="py-4">
  <label className="pl-4 block text-start md:pl-14 text-2xl text-black" htmlFor="demo1">Description</label>
  <input id="demo1"className="border-2 border-gray-200 h-8 r w-[90%]"  defaultValue={datas.exist?.description
 || ""}  name="desc"  onChange={(e)=>Setdesc(e.target.value)} />
</div>
<div className="py-4">
  <label className="pl-4 block text-start md:pl-14 text-2xl text-black" htmlFor="demo1">Count</label>
  <input id="Description"className="border-2 border-gray-200 h-8 r w-[90%]"  defaultValue={datas.exist?.count
 || ""} name="count"  onChange={(e)=>Setcount(e.target.value)} />
</div>
<div className="py-4">
  <label className="pl-4 block text-start md:pl-14 text-2xl text-black" htmlFor="demo1">Price</label>
  <input id="demo1"className="border-2 border-gray-200 h-8 r w-[90%]" defaultValue={datas.exist?.price
 || ""} name="prce"  onChange={(e)=>Setprice(e.target.value)}/>
</div>
<div className="py-4">
  <label className="pl-4 block text-start md:pl-14 text-2xl text-black" htmlFor="demo1">Price</label>
  <input type="file" id="demo1"className="border-2 border-gray-200 h-8 r w-[90%]"  name="file"  onChange={(e)=>handleFileChange(e.target.files)}/>
</div>

<button onClick={handlesumit}>Update Now</button>
</div>
    ) : (
      <div> loding</div>
    
    )}
    </div>
  );
}

