
            import React, { useEffect, useState,CSSProperties } from "react";
  import img from "../../../public/images/home/desktop/headphone-hero-image.png"
  import { useParams } from 'react-router-dom';
  import AliceCarousel from 'react-alice-carousel';
  import 'react-alice-carousel/lib/alice-carousel.css';
  import axios from "axios"
  import 'react-dropdown/style.css';

  import Dropdown from 'react-dropdown';
  export default function Product()

  {

  ///
  const[values,setvalue]=useState(1)
  

  const handleDragStart = (e) => e.preventDefault();
  const options = [
  '1', '2', '3'
  ];

  const defaultOption = options[0];

  const onselect=()=>{
    console.log(values.value)
  }
  //
  const items = [
  <img src={img} onDragStart={handleDragStart} role="presentation" />,
  <img src={img} onDragStart={handleDragStart} role="presentation" />,
  <img src={img} onDragStart={handleDragStart} role="presentation" />,
  ];


  ///////
  const[data,setdata]=useState({})
  const { id } = useParams();

  useEffect(()=>{
  const getdata=async ()=>{
  const response = await axios.get(`/api/product/find/${id}`)
  setdata(response.data.exist)
 

  }
  getdata();
  },[id])

  const add = async () => {
    try {
      const response = await axios.post("/api/cart/add", { itemId: data._id, quantity: values.value })
      console.log(response)
    }
    catch (err) {
      console.log(err.response.data)
    }
  }
  return(
  <div className="">

  <div className=" pt-28 flex">
  <div className="w-[50%] -z-10 flex flex-col justify-center items-center mx-auto lg:flex-row-reverse">
  <h1 className=" font-extrabold text-6xl lg:text-7xl" >{data.name}</h1>

  <AliceCarousel mouseTracking items={items} />

  </div>


  </div>
<div className="">
  <div className="flex  flex-row  justify-evenly items-center mx-3 my-5 py-4 flex-wrap ">
    <p>Select qty:</p>
    <Dropdown
  options={options}
  onChange={(selectedOption) => setvalue(selectedOption)}
  value={defaultOption}
  placeholder="Select an option"
/>

    <button  onClick={add} className=" w-[80%] mt-3 py-2 bg-orange-500 rounded-lg">
      Add to cart
    </button>
  </div>
  <div className=" mx-auto w-[80%]  overflow-auto">
    <p className="break-words font-extralight ">{data.description}</p>
  </div>
</div>;
</div>
)
}
