
import Home from './components/Home/Home.jsx'
import Userpage from "./components/user/Userpage.jsx"
import Navbar from './components/Navbar/Navbar'
import Footer from './components/footer/Footer'
import Signup from './components/authpages/Signup'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './components/authpages/Login'
import Commondetail from './components/pages/Commondetail.jsx'
import Product from './components/pages/Product.jsx'
import Cartlist from './components/pages/cartpage/Cartlist.jsx'
import Checkout from './components/pages/Checkout.jsx'
import Updatepassword from './components/user/Updatepassword.jsx'
import Adminscreen from './components/admin/Adminscreen.jsx'
import React, { useState,useEffect } from 'react';
import Protected from './components/admin/Protected.jsx'
import Productpage from './components/admin/Productpage.jsx'
import Getproduct from './components/admin/Getproduct.jsx'
import Updateproduct from './components/admin/Updateproduct.jsx'
import Userlists from './components/admin/Userlists.jsx'
import Contactus from './components/pages/Contactus.jsx'
import Paymentsuccess from './components/pages/Paymentsuccess.jsx'
import Userorder from './components/user/Userorder.jsx'
import Orders from "./components/admin/Order.jsx"
import { useSelector } from 'react-redux'
import Conatctus from './components/pages/Contactus.jsx'

function AppWrapper() {
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const [admin, setAdmin] = useState(isAdmin);
  console.log(admin)

  useEffect(() => {
    setAdmin(isAdmin);
  }, [isAdmin]);

  return (
    <div className="min-h-screen flex flex-col">
     
        <Navbar />
      

      <div className="flex-1">
    
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cartlist />} />
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/paymentsuccess" element={<Paymentsuccess/>}/>
             <Route path="/ordersuser" element={<Orders/>}/>
            <Route
  path="/admin/*"
  element={
    <Protected isSignedIn={admin}>
      <Adminscreen />
    </Protected>
  }
>
  <Route path="addproduct" element={<Productpage />} />
  <Route path="getproduct" element={<Getproduct />} />
    <Route path="updateproduct/:id" element={<Updateproduct />} />
    <Route path="customer" element={<Userlists />} />
  <Route path="dashboard" element={<Productpage />} />
  <Route path="orders" element={<Orders />} />

</Route>


            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/headphone" element={<Commondetail propName="headphones"/>} />
            <Route path="/earphone" element={<Commondetail propName="earphones"/>} />
            <Route path="/speaker" element={<Commondetail  propName="speakers"/>} />
            <Route  path="/contact" element={<Contactus/>}/>
            <Route path="/product"  >
            <Route path=':id' element={<Product />} />
           
            </Route>
            <Route path="/user/*" element={<Userpage />}>
  <Route path="updatepassword" element={<Updatepassword />} />
  <Route path="userorder" element={< Userorder  />} />
 
</Route>
          
          </Routes>

      </div>

     
        <Footer />
      
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

