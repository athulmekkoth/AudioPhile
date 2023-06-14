import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/api/order/get');
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
      <h1>User Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div className='bg-black w-[70%] mx-auto text-white '  key={order._id}>
           
            <p>Price: {order.ordertotal}</p>
            <ul>
              {order.product && Array.isArray(order.product) ? (
                order.product.map((item) => <li key={item._id}>{item.name}</li>)
              ) : (
                <li>No items found.</li>
              )}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default UserOrder;
