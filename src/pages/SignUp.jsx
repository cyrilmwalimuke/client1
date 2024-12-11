import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Oauth from '../components/Oauth'

export default function SignUp() {
  const [formData,setFormData] = useState({})
  const [err,setErr] = useState(null)
  const navigate = useNavigate()
const handleSubmit = async(e)=>{
  e.preventDefault()
  const res = await fetch('http://localhost:3000/sign-up',{
    method:'Post',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(formData)
  })
  const data = await res.json()
  console.log(data)
  if(data.success===false) 
    
    {
      setErr(data.message)
      
    return
  }

  navigate('/')


}

const handleChange = (e) =>{
  setFormData({...formData,[e.target.id]:e.target.value})
}

  return (
    <div className='p-5 flex flex-col items-center justify-center h-screen'>
      <p className='mb-5 text-3xl font-bold'>SignUp</p>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3' >
      
        <input type="text" placeholder='email' id='email' className='rounded-md p-1' onChange={handleChange}/>
        <input type="text" id='password' placeholder='password' className='rounded-md p-1' onChange={handleChange}/>



        <button className='bg-blue-400 rounded-md p-1'>Register</button>
        <Oauth/>
      </form>
      
      <div className='flex gap-3 text-sm mt-3'>
      <p>already have an account?</p>
      <Link className='text-blue-400'>login</Link>

    </div>
    <p className='text-xs text-rose-700'>{err}</p>
      
    </div>
  )
}
