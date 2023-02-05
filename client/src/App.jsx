
import './App.css'
import Home from './components/Home/Home.jsx'
import Earphones from './components/Earphones/Earphones'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/footer/Footer'
import Signup from './components/authpages/Signup'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './components/authpages/Login'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
     
      <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signup" element={<Signup />} />
            <Route exact path="/login" component={Login} />
          </Routes>
        </div>
        <Footer />
        
      </BrowserRouter>
    </div>
  );
}