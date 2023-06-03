import React from "react";

const Card = (props) => {
    console.log(props.item)
  const {
  
    Shipping,
    date,
    mode,
    ordertotal,
    owner,
    product,
    status,
  } = props.item
console.log(Shipping
    )
    const change=async()=>{

    }
  return (
    <div className="bg-black my-3 shadow rounded p-6">
    <div className="mb-4">
      <h1 className="text-2xl font-bold">Shipping Details</h1>
    </div>
    <div className="flex flex-col space-y-4">
    <p>
        <span className="font-bold">shippin:</span>{Shipping.name}
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
      <p>
        <span className="font-bold">Product Detail:</span>{" "}
        {product.map((item) => (
          <span className="text-blue-400"><br>
          </br>Name:{item.name} <br></br> Quantity:{item.quantity} </span>
        ))}
      </p>
      <p>
        <span className="font-bold">Shipped:</span> {status}
      </p>
      <select onChange={change} value={status} className="w-1/3 mx-auto">
  <option value="false">False</option>
  <option value="true">True</option>
</select>
    </div>
  </div>
  );
};

export default Card;
