import React from "react";
import img from "/images/shared/man-headerphone.png";
import { RiDeleteBin2Line } from "react-icons/ri";
import axios from "axios";
import { Link } from "react-router-dom";
import { remove } from "../redux/Adminslice";
import { useDispatch } from "react-redux";

export default function ProductCard(props) {
  const dispatch = useDispatch();

  const del = async () => {
    try {
      console.log(props.items._id);
      dispatch(remove(props.items._id));

      const response = await axios.delete("/api/product/del", {
        data: { id: props.items._id },
      });

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-black w-[60%] mx-auto flex flex-row justify-between my-4 py-4 rounded-lg">
      <div className="flex-col mx-5 flex mt-5 lg:text-2xl lg:w-[70%] items-start lg:mx-12">
        <h1 className="my-3">Name: {props.items.name}</h1>
        <h1 className="my-3">Category: {props.items.category}</h1>
        <h1 className="my-3">Instock: {props.items.count}</h1>
        <h1 className="my-3">Price: {props.items.price}</h1>
        <Link to={`/admin/updateproduct/${props.items._id}`}>
          <button className="bg-gray-700 w-[100%] py-2  px-2 rounded-md hover:animate-pulse my-3">
            Update product
          </button>
        </Link>
      </div>
      <div className="mx-5 flex flex-col justify-between items-center my-4">
        <img className="rounded-xl w-32" src={props.items.photos[0]} />
        <span onClick={del} className="mx-5 cursor-pointer">
          <RiDeleteBin2Line />
        </span>
      </div>
    </div>
  );
}
