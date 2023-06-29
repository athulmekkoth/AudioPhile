import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/authpages/Signup'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';
import Messages from './components/admin/Messages';
import  { useState,useEffect } from 'react';
const Home = lazy(() => import('./components/Home/Home.jsx'));

const Userpage = lazy(() => import('./components/user/Userpage.jsx'));
import Protected from './components/admin/Protected.jsx'
const Login = lazy(() => import('./components/authpages/Login.jsx'));
const Contactus = lazy(() => import('./components/pages/Contactus.jsx'));
const Commondetail = lazy(() => import('./components/pages/Commondetail.jsx'));
const Product = lazy(() => import('./components/pages/Product.jsx'));
const Cartlist = lazy(() => import('./components/pages/cartpage/Cartlist.jsx'));
const Checkout = lazy(() => import('./components/pages/Checkout.jsx'));
const Updatepassword = lazy(() => import('./components/user/Updatepassword.jsx'));
const Adminscreen = lazy(() => import('./components/admin/Adminscreen.jsx'));
const Productpage = lazy(() => import('./components/admin/Productpage.jsx'));
const Getproduct = lazy(() => import('./components/admin/Getproduct.jsx'));
const Updateproduct = lazy(() => import('./components/admin/Updateproduct.jsx'));
const Userlists = lazy(() => import('./components/admin/Userlists.jsx'));
const Paymentsuccess = lazy(() => import('./components/pages/Paymentsuccess.jsx'));
const Userorder = lazy(() => import('./components/user/Userorder.jsx'));
const Orders = lazy(() => import('./components/admin/Order.jsx'));
import { useSelector } from 'react-redux';
function AppWrapper() {
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const [admin, setAdmin] = useState(isAdmin);

  useEffect(() => {
    setAdmin(isAdmin);
  }, [isAdmin]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cartlist />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/paymentsuccess" element={<Paymentsuccess />} />
            <Route path="/ordersuser" element={<Orders />} />
            <Route
              path="/admin/*"
              element={
                <Protected isSignedIn={admin}>
                  <Adminscreen />
                </Protected>
              }
            >
              <Route path="addproduct" element={<Productpage />} />
              <Route path="messages" element={<Messages />} />
              <Route path="getproduct" element={<Getproduct />} />
              <Route path="updateproduct/:id" element={<Updateproduct />} />
              <Route path="customer" element={<Userlists />} />
              <Route path="dashboard" element={<Productpage />} />
              <Route path="orders" element={<Orders />} />
            </Route>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/headphone" element={<Commondetail propName="headphones" />} />
            <Route path="/earphone" element={<Commondetail propName="earphones" />} />
            <Route path="/speaker" element={<Commondetail propName="speakers" />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/product">
              <Route path=":id" element={<Product />} />
            </Route>
            <Route path="/user/*" element={<Userpage />}>
              <Route path="updatepassword" element={<Updatepassword />} />
              <Route path="userorder" element={<Userorder />} />
            </Route>
          </Routes>
        </Suspense>
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
