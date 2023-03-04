import React from "react";
import img from "../../../public/images/home/desktop/headphone-hero-image.png"
import { Link } from "react-router-dom";
export default function Card(props) {
  console.log(props.item)

  return (
  
    <div className="w-1/2  bg-white rounded-2xl overflow-hidden shadow-2xl">
  
      <div className="p-4">
        <h3 className="font-medium text-lg">{props.item.name}</h3>
        <img src={img}  alt="P"/>
      
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-700 font-medium">${props.item.price}</p>
          <Link to="/product/12">
          <button className="px-4 py-2 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700">
            Buy Now
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
}