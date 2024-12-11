import React from 'react'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";

export default function Footer() {
  const currentYear  =new Date().getFullYear()
  return (
    <div className='border-y-2 p-7 flex flex-col gap-7 sm:items-center'>
      <h1 className='font-bold'>Inside Juice and Sip</h1>
      <div className='flex flex-col gap-5 sm:flex-row text-gray-600 text-sm'>
        <p>Return and Refund Policy</p>
        <p>Terms of Service</p>
        <p>Contact US</p>
        <p>FAQ</p>
      </div>

      <div className='flex gap-5 text-xl self-center'>
      <FaFacebook />
      <FaInstagram />
      <IoLogoTiktok />
      </div>
      <div className='text-xs py-7 flex text-gray-700 justify-center items-center'>
      <p>&copy;</p>
      <p>{currentYear} Sip & Juice </p>

    </div>
 
     


    </div>
  )
}
