import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import icons
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
// import components
import CartItem from '../components/CartItem';
// import sidebar context
// Change this import statement in Sidebar.js
import { SidebarContext } from '../contexts/SidebarContext';
// import cart context 
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
    const { isOpen, handleClose } = useContext(SidebarContext);
    const { cart, clearCart, total , itemAmount} = useContext(CartContext);
    let  amount = 100;

    const handleSubmit = ()=>{
       
        if(amount === ""){
        alert("please enter amount");
        }else{
          var options = {
            key: "rzp_test_NgwEwXk1hnhpL6",
            key_secret:"V7zT59Z0mlO1YOjR4lWwnhfw",
            amount: amount *total,
            currency:"INR",
            name:"STARTUP_PROJECTS",
            description:"for testing purpose",
            handler: function(response){
              alert(response.razorpay_payment_id);
            },
            prefill: {
              name:"Velmurugan",
              email:"mvel1620r@gmail.com",
              contact:"7904425033"
            },
            notes:{
              address:"Razorpay Corporate office"
            },
            theme: {
              color:"#3399cc"
            }
          };
          const paymentObject = new window.Razorpay(options);
        paymentObject.open();

        }
    }
    return (
        <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2x1 md:w-[35vm] xl:max-w-[30vm] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
            <div className='flex items-center justify-between py-6 border-b'>
                <div className=' uppercase text-sm font-semibold'>
                    Shopping Bag ({itemAmount})
                </div>
                {/* icon */}
                <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'> 
                    <IoMdArrowForward className='text-2x1' />
                </div>
            </div>
            <div className=' flex flex-col gap-y-2 h-[520px]  lg:h-[440px] overflow-y-auto overflow-x-hidden border-b'>
                {cart.map((item) => {
                return <CartItem item={item} key={item.id} />;
            })}</div>
            <div className=' flex flex-col gap-y-3 py-4 mt-4 '>
                <div className='flex w-full justify-between items-center'>
                  
                        {/* total */}
                        <div className='uppercase font-semibold'><span className='mr-2'> Total:</span>${parseFloat(total).toFixed(2)}</div>
                   
                    {/* clear cart icon */}
                    <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'> <FiTrash2 /></div>
                </div>
                <Link to='/' className='bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium'>view cart</Link>
                {/* <Link to='/' className='bg-primary flex p-4 justify-center items-center text-white w-full font-medium'>checkout</Link> */}
                <button onClick={()=>{
                    handleSubmit();
                }}>checkout</button>
            </div>
        </div>
        
    );
};

export default Sidebar;




