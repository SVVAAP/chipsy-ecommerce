import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
//import components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
// import Dashboard from "./components/Dashboard";
// import LogIn from "./components/LogIn";
// import SignUp from "./components/SignUp";
// import { AuthProvider } from "./components/Auth";
// import RazorpayCheckout from './components/Razorpay';


const App = () => {
  return <div className='overflow-hidden'>
      {/* <AuthProvider/> */}
    <Router>
      <Header/>
     {/* <RazorpayCheckout/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product/:id' element={<ProductDetails/>}/>
        {/* <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} /> */}
      </Routes>
      <Sidebar/>
      <Footer/>
    </Router>
   
  </div>;
};

export default App;
