import React from 'react'
import { FaRegPaperPlane } from 'react-icons/fa';
import { SiLivechat } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className='p-12'>
<div className='flex w-full justify-center'>
  <h1 className='border-b-4 border-black text-xl'>Contact Us</h1>

</div>
<p className='text-sm text-center text-gray-500 mt-3'>
  Got any questions about the product or scaling on our platforms?We are here to help you.
</p>
<p className='text-sm text-center text-gray-500'>
  Chat to our friendly team 24/7 and get onboard in less than 5 minutes
</p>


<div className='flex flex-col sm:flex-row justify-between mt-7'>
  <form className='text-sm flex flex-col gap-3 flex-1'>
  <div>
      <p>First name</p>
      <input type="text" className='border-gray-200 border-2 p-1 rounded-md'/>
    </div>
    
    <div>
      <p>Last name</p>
      <input type="text" className='border-gray-200 border-2 p-1 rounded-md'/>
    </div>
    <div>
      <p>Email</p>
      <input type="text" className='border-gray-200 border-2 p-1 rounded-md'/>
    </div>
    <div>
      <p>phone number</p>
      <input type="text" className='border-gray-200 border-2 p-1 rounded-md'/>
    </div>
    
    <div>
      <p>message</p>
      <textarea name="" id="" rows={10} cols={40} className='p-2 outline-black' placeholder='write something....'></textarea>
    </div>
    <button className='text-white bg-black w-[300px] p-1 rounded-lg'>
      send message
    </button>

  </form>

  <div className='text-sm flex-1'>
    <div className='flex flex-col gap-2'>
    <h1 className='text-xl'>Chat with Us</h1>
    <p>Speak to our friendly team with live chat</p>
    <div className='flex items-center'>
    <SiLivechat />
    <p className='underline'>start a live chat</p>
    </div>
    <div className='flex items-center'>
    <FaRegPaperPlane />
    <p className='underline'>shoot us an email</p>
    </div>
    <div className='flex items-center'>
    <FaXTwitter />
    <p className='underline'>Message Us on X</p>
    </div>

    </div>


   

  </div>



</div>


    </div>
   
     





      
  
  )
}
