import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home.jsx'
import Earphones from './components/Earphones/Earphones'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
export default function App()
{
return(
  
    <BrowserRouter>
      <Navbar/>
   
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
      
   </BrowserRouter>
   
   )
   }
