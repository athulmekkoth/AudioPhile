import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/api/order/get');
        console.log(orders)
        setOrders(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []);
console.log(orders)
  return (
    <div >
      <h1 className='mt-3 text-4xl text-black'>User Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div className='text-2xl flex flex-col my-8 rounded-2xl lg:pb-10 mx-auto text-white w-[100%] lg:w-[50%] justify-center items-center gap-0'  key={order._id}>
           <div className=' bg-gray-500 w-[80%] rounded-lg p-8'>
           <p >Price:{order.ordertotal}</p>
            <p>Mode of Payment:{order.mode}</p>
            <p className=' w-[100%]  text-2xl '>{order.status==="pending"?<p>Your Order wil be shipped soon</p>:<p>Wohoo!!Your Order is  on the way</p>}</p>
           </div>
           
         
            <div>
            <div className='mt-10 bg-white border border-black p-4 rounded-lg   text-black'>
                    {order.product && Array.isArray(order.product) ? (
                order.product.map((item) => 

          <div className='flex flex-row-reverse justify-center items-end gap-9 '>
   <div className='flex flex-row gap-20'    >
                <h1>Name:{item.name}</h1>
                <h1>Quantity:{item.quantity}</h1>
                <h1>Price:{item.price}</h1>
               
                         </div>

                         <div>
                          <img src={item.photos[0]} alt='def' width={100} height={100}/>
                         </div>


          </div>
             
               
                
                
                
                
                )
              ) : (
                <li>No items found.</li>
              )}
             
              </div>
      
            </div>
          </div>
        ))
      )}
    </div>
  ); 
};

export default UserOrder;
