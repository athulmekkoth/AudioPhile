import React, { useEffect, useState } from 'react';
import Card from './Card.jsx';

import axios from 'axios';

export default function Commondetail(props) {
  const [state, setState] = useState([]);
  const [sort, setSort] = useState('');

  const fetchData = async () => {
    const response = await axios.get(`/api/product/getall/${props.propName}?sort=${sort}`);
   console.log(response.data)
    setState(response.data);
  };

  useEffect(() => {
    fetchData();
  }, [sort]);

  const handleSorting = (e) => {
    setSort(e.target.value);
  };

  return (
    <div>
      <div className="mt-24 text-end mr-5 ">
        <select name="sort" id="sort" onChange={handleSorting}>
          <option value="">Default Sorting</option>
          <option value="lowest">Price Lowest</option>
          <option value="highest">Price Highest</option>
          <option value="asc">Name [A-Z]</option>
          <option value="desc">Name [Z-A]</option>
        </select>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-16 justify-items-center">
      {Array.isArray(state) && state.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
    </div>
  );
}
