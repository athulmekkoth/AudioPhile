import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useLocation } from 'react-router-dom'
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  marginTop: "70px", 
};


export default function Updateproduct(props) {
  const {id}=useParams()
 

  const [datas, getData] = useState({});
  useEffect(()=>{
    const getdata=async()=>{
      try{
      const response=axios.get(`/api/product/find/${id}`)
      console.log(response)}
      catch(err)
      {
        console.log(err)
      }
    }

  },[id])
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");


  return (
    <div>
    {datas ? (
<div></div>
    ) : (
      <div className="sweet-loading">
        <ClipLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    )}
    </div>
  );
}

