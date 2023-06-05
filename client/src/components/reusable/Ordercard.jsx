import React, { useState } from "react";
import axios from "axios"
const Card = (props) => {
  console.log(props.item);
  const {
    _id,
    Shipping,
    date,
    mode,
    ordertotal,
    owner,
    product,
    status,
  } = props.item;

const[state,setState]=useState("")
  const change = async(e)=>
  {
try{
  const response=await axios.post("/api/order/update",{status:state,id:_id})
}
catch(err)
{
  console.log(err)
} 
};
  const remove = async(e)=>
  {
try{
 
  const response=await axios.post("/api/order/delete",{id:_id})
  console.log(response)
}
catch(err)
{
  console.log(err)
}  
};
  return (
    <div className="bg-black my-3 shadow rounded p-6">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Shipping Details</h1>
      </div>
      <div className="flex flex-col space-y-4">
        <p className="flex flex-col">
          Adress
          <span className="font-bold">NAME: {Shipping.name}</span>
          <span className="font-bold">CITY: {Shipping.city}</span>
          <span className="font-bold">CONTACT: {Shipping.email}</span>
          <span className="font-bold">HOUSE: {Shipping.house}</span>
          <span className="font-bold">Mobile: {Shipping.contact}</span>
          <span className="font-bold">LANDMARK: {Shipping.landmark}</span>
          <span className="font-bold">PINCODE: {Shipping.PINCODE}</span>
        </p>

        <p>
          <span className="font-bold">Date:</span> {date}
        </p>
        <p>
          <span className="font-bold">Mode:</span> {mode}
        </p>
        <p>
          <span className="font-bold">Order Total:</span> {ordertotal}
        </p>
        <p>
          <span className="font-bold">Owner:</span> {owner}
        </p>
        <p className="rounded-md p-4">
          <span className="font-bold">Product Detail:</span>{" "}
          {product.map((item) => (
            <span className="text-blue-800 text-xl" key={item.name}>
              <br />
              Name: {item.name}, Quantity: {item.quantity}
            </span>
          ))}
        </p>
        <p>
          <span className="font-bold">Shipped:</span> {status}
        </p>
        <select defaultValue={status} className="w-1/3 mx-auto" onChange={ (e)=>{setState(e.target.value)}}>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <div className="flex justify-center gap-5">
          <button onClick={remove} className="bg-yellow-400 w-1/4 px-2 py-2 text-white rounded-xl">
            DELETE
          </button>
          <button  onClick={change} className="bg-white w-1/4 px-2 py-2 text-black rounded-xl">Update</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
