import React from "react";

export default function Card(props) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
  
      <div className="p-4">
        <h3 className="font-medium text-lg">heading</h3>
        <p className="text-gray-600 text-sm mt-1">desc</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-700 font-medium">$34</p>
          <button className="px-4 py-2 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}