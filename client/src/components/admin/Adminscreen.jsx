import React from "react";
import { useSelector } from "react-redux";
import {Link, Outlet} from "react-router-dom"
export default function Adminscreen()
{
    const user=useSelector((state)=>state.user)
        

    return(
      <div className="mt-24  text-gray-400 text-center">
        <h1 className="text-6xl  "> Admin Dashboard</h1>
        <div className="flex gap-6 justify-center mt-20">
        <button
      
      type="submit"
      className="bg-blue-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
    >
    Customers
    </button>
    <Link to="addproduct">
    <button
      
      type="submit"
      className="bg-blue-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
    >
 Add Product
    </button>
    </Link >
    <Link to="getproduct">
    <button
      
      type="submit"
      className="bg-blue-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
    >
Update/Delete
    </button>
    </Link >
    <Link to="getproduct">
    <button
      
      type="submit"
      className="bg-blue-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
    >
Sales
    </button>
    </Link >
    <Link to="getproduct">
    <button
      
      type="submit"
      className="bg-blue-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
    >
Orders
    </button>
    </Link >
    </div>
    <Outlet />
      </div>
    )

}