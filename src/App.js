import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Login from './components/Login';
import SignUp from './components/SignUp';
//import components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';

import { AuthProvider } from "./components/Auth";
import RazorpayCheckout from './components/Razorpay';


const App = () => {
  return <div className='overflow-hidden'>
     
    <Router>
      <Header/>
     {/* <RazorpayCheckout/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Sidebar/>
      <Footer/>
    </Router>
   
  </div>;
};

export default App;
