import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { BsBag } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import {  signOut } from "firebase/auth";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsActive(window.scrollY > 60);
    });

    // Check if user is logged in
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Clean up subscription
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate("/");
      console.log("Signed out successfully");
    }).catch((error) => {
      console.error("Sign out error:", error);
    });
  }

  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md ' : 'bg-none py-6'} fixed w-full z-10 transition-all item-center`}>
      <div className=' container mx-auto  flex item-center  justify-between h-full'>
        <Link to={'/'}>
          <div>
            <img className='w-[40px]' src={Logo} alt='' />
          </div>
        </Link>

        <div>
          {user ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>

        <div>
          <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative '>
            <BsBag className='text-2x1' />
            <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
