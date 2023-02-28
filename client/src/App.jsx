
import Home from './components/Home/Home.jsx'
import Earphones from './components/Earphones/Earphones'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/footer/Footer'
import Signup from './components/authpages/Signup'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './components/authpages/Login'
import Commondetail from './components/pages/Commondetail.jsx'



import React from 'react';
import { useLocation } from 'react-router-dom';

function AppWrapper() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Navbar />
      )}

      <div className="flex-1">
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/head" element={<Commondetail propName="head"/>} />
            <Route path="/head" element={<Commondetail propName="ear"/>} />
            <Route path="/head" element={<Commondetail  propName="ear"/>} />

            
          </Routes>

      </div>

      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Footer />
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

