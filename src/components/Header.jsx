import React from 'react'
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

export default function Header() {
  return (
    <header className='bg-black px-7 py-2 text-white flex items-center justify-between'>
        <MdOutlineChevronLeft />
        <p className='text-xs'>Grab our blenders at affordable prices</p>
        <MdOutlineChevronRight />

    
    </header>
  )
}
