import React, { useEffect,useState } from "react";
import Usercard from "./Usercard";
import axios from "axios"
import { fetchUData } from "../redux/Userlist";

import { useSelector,useDispatch } from "react-redux";

const Userlists=()=>{
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const response = useSelector((state) => state.ulist.items);
  
  
    useEffect(() => {
      dispatch(fetchUData());
    }, [dispatch]);


    useEffect(() => {
      setData(response);
    }, [response]);


return(
    <div className="py-3">
      {data?.map((item)=>{
        return    <Usercard item={item}  />

      })}


    </div>
)
}
export default Userlists;