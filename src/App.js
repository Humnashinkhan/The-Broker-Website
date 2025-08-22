import React from "react";
import { Routes , Route } from 'react-router-dom';
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import Topbar from "./components/Topbar/Topbar";
import SellerLogin from "./components/SellerLogin/SellerLogin";
import BuyerLogin from './components/BuyerLogin/BuyerLogin.jsx';
import Mainpage from "./components/Mainpage/Mainpage.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  return (
   <div>
     <Topbar/>
     <Routes>
       <Route path="/login" element={<Login />}/>
       <Route path="/Register" element={<Register />}/>
       <Route path="/SellerLogin" element={<SellerLogin />}/>
       <Route path="/BuyerLogin" element={<BuyerLogin />}/>
       <Route path="/" element={<Mainpage />}/>
      </Routes>
      <Footer/>

     


      </div>
    
  );
}

export default App;
