import React, { useState } from "react";
import { useSelector } from "react-redux"
import {Link, Outlet} from "react-router-dom";

export default function UserPage() {
  const user = useSelector((state) => state.user.currentUser);


 

  return (
    <div className="mt-20 text-center ">
    <h1 className="text-9xl text-gray-500">
      Hello, {user.name}
    </h1>
    <div className="w-[100%] text-center mt-12 ">
    <Link to="/ordersuser">
    <button

        className="mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        My orderes
      </button></Link>
      <Link to="updatepassword">
      <button
    
       
    className="mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    Update Password
  </button>
  </Link>
  <Outlet />
    
      </div>
    </div>
  );
}
/*\*/