
import './index.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice';
import Cart from './pages/Cart'
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Checkout from './pages/Checkout';
import Order from './pages/Order';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';



import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import PrivateRoute from './components/PrivateRoute';




function App() {
  const {cartItems} = useSelector((store) => store.cart)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);


  

  return (
    <BrowserRouter>
    <Header/>
    <Navbar/>
    <Routes>
      <Route path='/' element ={<Home/>}/>
      
      <Route path='/cart' element={<Cart/>}/>
      
      <Route path='/orders' element={<Order/>}/>
      
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/login' element={<SignIn/>}/>
    <Route path='/sign-up' element={<SignUp/>}/>
    <Route element={<PrivateRoute />}>
    <Route path='/checkout' element={<Checkout/>}/>
       
        </Route>
      





      



    </Routes>
    <Footer/>
    


    </BrowserRouter>

  )
}

export default App
