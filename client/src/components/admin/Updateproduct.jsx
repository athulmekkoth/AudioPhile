import React from "react";

import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useLocation } from 'react-router-dom'
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
export default function Updateproduct() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    const location = useLocation()
  const { from } = location.state
    return (
      <div className="sweet-loading">
        <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
        <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />
  <h1>{from}</h1>
        <ClipLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
}
