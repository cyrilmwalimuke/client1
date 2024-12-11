import React, { useState } from 'react'
import { CiMenuBurger, CiSearch, CiUser } from "react-icons/ci";
import { BsDoorClosed, BsMinecart } from "react-icons/bs";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { IoIosClose } from "react-icons/io";
import Footer from './Footer';
import { signOutUserSuccess } from '../features/user/userSlice';
import { MdOutlineShoppingBag } from "react-icons/md";

export default function Navbar() {

  const { cartItems, total, amount,isInCart} = useSelector((store) => store.cart);
  const dispatch = useDispatch()
  const {currentUser} = useSelector((state)=>state.user)
    const pathname  = useLocation().pathname
    const [showSidebar,setShowSidebar] = useState(false)
    const [showAccountTab,setShowAccountTab] = useState(false)
  return (
    <nav className='flex justify-between items-center px-8  border-b-[1.2px] border-gray-500'>
        <CiMenuBurger size={25} className='sm:hidden' onClick={()=>{
          setShowSidebar(true)
          setShowAccountTab(false)

        }
          }/>
        <Link to ='/'>
        <img src="logo.png" alt="" className='h-[80px] w-[100px]'/>
        </Link>
        <div className='hidden sm:flex gap-3'>
            <Link to='/' className={location.pathname === '/' ? 'underline' : ''}>Home</Link>
            <Link to='/orders' className={location.pathname === '/orders' ? 'underline' : ''}>Orders</Link>
            <Link to='/about' className={location.pathname === '/about' ? 'underline' : ''}>About Us</Link>
            <Link to='/contact' className={location.pathname === '/contact' ? 'underline' : ''}>Contact</Link>
        </div>
        <div className='flex items-center gap-3 text-xl sm:text-2xl'>
            
          
            <CiUser onClick={()=>{
              setShowAccountTab(true)
              setShowSidebar(false)
              
            }} className='text-xl sm:text-4xl'/>
            <Link to='/cart'>
            <div className='nav-container'>
            <MdOutlineShoppingBag className='sm:text-4xl'/>
            <div className='amount-container'>
              <p className='total-amount'>{amount}</p>
            </div>
          </div>
            </Link>
          
            

            
        </div>

        {showSidebar && 
          <div className='bg-white h-screen w-[70%] fixed top-0 left-0 z-10 transition-all duration-9000 p-7'>
            <div className='mb-7 flex items-center justify-between'>
              <img src="/logo.png" alt="" className='h-10 w-[70px]' />
            <IoIosClose size={30} onClick={()=>setShowSidebar(false)}/>

            </div>
            <div className='flex flex-col gap-3 text-sm'>
              <Link to='/' onClick={()=>setShowSidebar(false)}  className={location.pathname === '/' ? 'underline' : ''}>Home</Link>
              <Link to='/orders' onClick={()=>setShowSidebar(false)}  className={location.pathname === '/orders' ? 'underline' : ''}>Orders</Link>
              <Link to='/about' onClick={()=>setShowSidebar(false)} className={location.pathname === '/about' ? 'underline' : ''}>About Us</Link>
              <Link to='/contact' onClick={()=>setShowSidebar(false)} className={location.pathname === '/contact' ? 'underline' : ''}>Contact</Link>
            </div>
            
            

          </div>}

          {
            showAccountTab &&  <div className='fixed top-0 right-0 bg-white z-10 w-[300px] h-screen'>
              <div className='flex justify-between'>
              <p>{currentUser?currentUser.email:""}</p>
              <IoIosClose size={30} onClick={()=>setShowAccountTab(false)}/>


              </div>
           
           
            <p>page in progress</p>
        
            <button onClick={()=>dispatch(signOutUserSuccess())} className=' p-3 mt-3'>
              sign out
              
              

            </button>
              
          </div>
          }

         

    </nav>
  )
}
