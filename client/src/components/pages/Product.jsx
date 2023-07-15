import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addtocart } from "../redux/cartslice";
import { FaPlus, FaMinus } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



export default function Product() {

 const notification=(text,type)=>{
  console.log(type)
  type === "success"?
  toast.success(text, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  })
  
  :
  toast.warn(text, {
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

  // Redux
  const dispatch = useDispatch();
  const res = useSelector((state) => state.cart);

  const adde = () => {
    setvalue((values) => values + 1);
  };

  // Selector dropdown
  const [values, setvalue] = useState(1);

  const handleDragStart = (e) => e.preventDefault();

  const onselect = () => {
    console.log(values);
  };

  // For id
  const { id } = useParams();
  console.log(id);

  // Getting data
  const [data, setData] = useState({});
  const [pic, setPic] = useState([]);
  useEffect(() => {}, [data]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/product/find/${id}`);
      setData(response.data.exist);
   setPic(response.data.exist.photos)
      console.log(data.count);
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
      if(response.status===200)
      {
        notification("Added to cart","success")

      }
    } catch (err) {
      console.log(err);
      if (err.response.status === 300) {
       notification("already in cart","success")
      }
    }
  };
  const items = pic.map(item => 
    
    
    (<img src={item} onDragStart={handleDragStart} role="presentation" />
      
      
      
      ));

console.log(items)

  return (
    <div className="">

    <div className=" pt-28 flex">
    <div className="w-[70%] -z-10 flex flex-col justify-center items-center mx-auto gap-28 lg:flex-row-reverse">
    <h1 className=" font-extrabold text-6xl lg:text-7xl" >{data.name}</h1>
    <div className="w-1/2 h-80 object-contain rounded-xl">
  <AliceCarousel disableDotsControls={true} animationDuration={700} autoPlay={true} infinite={true} disableButtonsControls={true} mouseTracking items={items} renderItem={(item) => (
    <img src={item.url}  style={{ objectFit: "cover" }} alt="Carousel Image" className="w-full h-full object-cover" />
  )} />
</div>

  
    </div>
  
  
    </div>
  <div className="mt-20 lg:mt-96">
    <div className="flex text-2xl flex-row  justify-evenly items-center mx-3 my-5 py-4 flex-wrap ">
     
      <div className="flex flex-row gap-10 bg-gray-400 p-4 rounded-lg">
      <p>Select qty:</p>
     <span onClick={()=>values>=4?alert("maximmum 4 per oder"):setvalue(values=>values+1)}><FaPlus /></span>
  <p className="">{values}</p>
     <span onClick={()=>values>=1?setvalue(values=>values-1):alert("minimmum order is 1")}><FaMinus /></span>
   
     </div>
  {data.count>0 ? <button onClick={() =>values==0?notification("values must not be zero","warn"): add(data, values)} className=" w-[70%] mt-3 py-2 bg-orange-500 rounded-lg">
    Add to cart
  </button>: <button o className=" w-[70%] mt-3 py-2 bg-orange-500  disabled rounded-lg">
    Out of stock
  </button>}
      
    </div>
    
   
     

  
    <div className="flex flex-col items-center gap-3 lg:gap-0 lg:flex-row w-[90%] mx-auto  lg:justify-around text-2xl"  >
    <p className="  overflow-auto text-cente text-3xl ">Price$:{data.price}</p>
    <p className="break-word font-extralight lg:w-[50%] text-center lg:text-left">{data.description}</p>
    </div>
  </div>
  <div className="flex flex-col gap-6 items-center mx-10 my-10 lg:flex-row justify-between">
    <div >
   <h1 className="text-center text-orange-300 text-2xl">Whats in the Box</h1> 
    <ol className="flex  flex-col justify-center items-center ">
     <li>Headphone
      </li> 
      <li>C type Cable
      </li> 
      <li>User manual and warrant card
      </li> 
    </ol>
    </div>
    <div className="w-[70%] lg:w-[40%]">
      <h1>Warranty and Support</h1>
      <p>
      Your satisfaction is our top priority, which is why we stand behind the quality of our earphones with a comprehensive warranty.
       Our warranty covers any manufacturing defects or malfunctions that may occur within a specified period from the date of purchase.
       In the unlikely event that your earphones experience any issues, simply contact 
       our customer service team, and we will be happy to assist you.<br></br>
       <span className="font-bold text-orange-400">For any query:<br></br>support@audiophile.com.</span>
      </p>
    </div>

    </div>
  
  </div>
  
  );
}
