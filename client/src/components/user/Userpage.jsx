import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function UserPage() {
  const user = useSelector((state) => state.user.currentUser);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [formChanged, setFormChanged] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    setFormChanged(true);
  };

  return (
    <form onSubmit={handleUpdate} onChange={handleInputChange}>
      <div className="my-4 mt-20 mx-20 ">
        <div className="">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="my-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="my-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        disabled={!formChanged}
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Update
      </button>
      </div>
    </form>
    
  );
}
