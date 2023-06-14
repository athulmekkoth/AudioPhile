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
    } catch (err) {
      console.log(err);
      if (err.response.status === 300) {
        toast.success("Already added in cart!", {
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
  const items = pic.map(item => 
    
    
    (<img src={item} onDragStart={handleDragStart} role="presentation" />
      
      
      
      ));

console.log(items)

  return (
    <div className="">

    <div className=" pt-28 flex">
    <div className="w-[70%] -z-10 flex flex-col justify-center items-center mx-auto gap-28 lg:flex-row-reverse">
    <h1 className=" font-extrabold text-6xl lg:text-7xl" >{data.name}</h1>
    <div className="w-1/2 h-80 rounded-xl">
  <AliceCarousel autoPlay={true} mouseTracking items={items} renderItem={(item) => (
    <img src={item.url} alt="Carousel Image" className="w-full h-full object-cover" />
  )} />
</div>

  
    </div>
  
  
    </div>
  <div className="mt-96">
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
    <div className=" mx-auto w-[80%]  overflow-auto text-cente text-xl">
      <p>Price$:{data.price}</p>
      <p className="break-words font-extralight ">{data.description}</p>
    </div>
  </div>;
  </div>
  );
}
