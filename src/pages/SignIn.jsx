import React, { useState } from 'react'
import { useNavigate, Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import Oauth from '../components/Oauth';
import { signInSuccess } from '../features/user/userSlice';

export default function SignIn() {

  const [formData,setFormData] = useState({})
  const { currentUser, loading, error } = useSelector((state) => state.user);
  console.log(currentUser)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [err,setErr] = useState(null)
const handleSubmit = async(e)=>{
  e.preventDefault()
  const res = await fetch('http://localhost:3000/login',{
    method:'Post',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(formData)
  })
  const data = await res.json()
  if(data.success===false) 
    
    {
      setErr(data.message)
    return
  }
  dispatch(signInSuccess(data));
  navigate('/')


}

const handleChange = (e) =>{
  setFormData({...formData,[e.target.id]:e.target.value})
}

  return (
    <div className='p-5 flex flex-col items-center justify-center h-screen'>
    <p className='mb-5 text-3xl font-bold'>Login</p>
    <form onSubmit={handleSubmit} className='flex flex-col gap-3' >
    
      <input type="text" placeholder='email' id='email' className='rounded-md p-1' onChange={handleChange}/>
      <input type="text" id='password' placeholder='password' className='rounded-md p-1' onChange={handleChange}/>



      <button className='bg-blue-400 rounded-md p-1'>login</button>
      <Oauth/>
    </form>
    
    <div className='flex gap-3 text-sm mt-3'>
      <p>dont have an account?</p>
      <Link to='/sign-up' className='text-blue-400'>signup</Link>

    </div>
    <p className='text-xs text-rose-700'>{err}</p>
    
  </div>
  )
}
