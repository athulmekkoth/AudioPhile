import React, { useEffect, useState } from "react";
import Productcard from "./Productcard";
import axios from  "axios"
import { fetchData } from "../redux/Adminslice";
import { useSelector, useDispatch } from "react-redux";

export default function Getproduct() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const response = useSelector((state) => state.admin.items);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    setData(response);
  }, [response]);

  return (
    <div className="">
      {data.map((item) => {
        return <Productcard key={item._id} items={item} />;
      })}
    </div>
  );
}

