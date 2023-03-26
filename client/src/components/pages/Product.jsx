
import React, { useEffect, useState,CSSProperties } from "react";
  import img from "../../../public/images/home/desktop/headphone-hero-image.png"
  import { useParams } from 'react-router-dom';
  import AliceCarousel from 'react-alice-carousel';
  import 'react-alice-carousel/lib/alice-carousel.css';
  import axios from "axios"
  import 'react-dropdown/style.css';
  import {useSelector,useDispatch} from "react-redux"
  import Dropdown from 'react-dropdown';
  import { addtocart } from "../redux/cartslice";
  export default function Product()

  {
//redux

const dispatch=useDispatch();
  

  /// for the selector dropdoen
  const[values,setvalue]=useState(2)
  

  const handleDragStart = (e) => e.preventDefault();
  
  

  const onselect=()=>{
    console.log(values)
  }
  //carousel
  const items = [
  <img src={img} onDragStart={handleDragStart} role="presentation" />,
  <img src={img} onDragStart={handleDragStart} role="presentation" />,
  <img src={img} onDragStart={handleDragStart} role="presentation" />,
  ];


  ///////for id

  const { id } = useParams();
  console.log(id)
//gettinfg data
const [data, setData] = useState({});

useEffect(() => {
 
}, [data]);

useEffect(() => {
  const getData = async () => {
    const response = await axios.get(`/api/product/find/${id}`);
    setData(response.data.exist);
  };
  getData();
}, [id]);

const add = async () => {
  try {
    if(data){
     
    dispatch(
      addtocart({
        
        data,
        values,
      })
    );
    }

    const response = await axios.post("/api/cart/add", {
      itemId: id,
      quantity: values,
    });
    console.log(response);
    console.log(data);
  } catch (err) {
    console.log(err.response.data);
  }
};
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
   
    <button onClick={() => add(data)}className=" w-[80%] mt-3 py-2 bg-orange-500 rounded-lg">
      Add to cart
    </button>
  </div>
  <div className=" mx-auto w-[80%]  overflow-auto">
    <p className="break-words font-extralight ">{data.description}{data.price}</p>
  </div>
</div>;
</div>
)
}
