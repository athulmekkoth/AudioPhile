
import React, { useEffect, useState,CSSProperties } from "react";
  import img from "../../../public/images/home/desktop/headphone-hero-image.png"
  import { useParams } from 'react-router-dom';
  import AliceCarousel from 'react-alice-carousel';
  import 'react-alice-carousel/lib/alice-carousel.css';
  import axios from "axios"
  import 'react-dropdown/style.css';
  import {useSelector,useDispatch} from "react-redux"
  import { addtocart } from "../redux/cartslice";
  import { FaPlus,FaMinus } from 'react-icons/fa'

  import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  export default function Product()

  
  {
//redux

const dispatch=useDispatch();
  const res=useSelector((state)=>state.cart)

const adde=()=>{
  setvalue(values=>values+1)
}
  /// for the selector dropdoen
  const[values,setvalue]=useState(1)
  

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
    console.log
    setData(response.data.exist);
    console.log(data.count)
  };
  getData();
}, [id]);

const add = async (product, quantity) => {
  try {
  
    dispatch(
      addtocart({
        data: product,
        values: quantity,
      })
    );

    const response = await axios.post("/api/cart/add", {
      itemId: product._id,
      quantity: quantity,
    });

 
  } catch (err) {
    console.log(err)
    if(err.response.status===300){
    
      toast.success('Already addded in cart!', {
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
   <span onClick={()=>values>=4?alert("maximmum 4 per oder"):setvalue(values=>values+1)}><FaPlus /></span>
<p className="">{values}</p>
   <span onClick={()=>values>=1?setvalue(values=>values-1):alert("minimmum order is 1")}><FaMinus /></span>
{data.count>0 ? <button onClick={() => add(data, values)} className=" w-[70%] mt-3 py-2 bg-orange-500 rounded-lg">
  Add to cart
</button>: <button o className=" w-[70%] mt-3 py-2 bg-orange-500  disabled rounded-lg">
  Out of stock
</button>}
    
  </div>
  <div className=" mx-auto w-[80%]  overflow-auto">
    <p className="break-words font-extralight ">{data.description}{data.price}</p>
  </div>
</div>;
</div>
)
}
