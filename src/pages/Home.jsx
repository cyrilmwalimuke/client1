import React from 'react'

import Banner from '../components/Banner'
import Extra from '../components/Extra'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import { useSelector } from 'react-redux'

export default function Home() {
  const {currentUser} = useSelector((state)=>state.user)
  console.log(currentUser)
    
  return (
    <div>
      
    
    <Banner/>
    
    <Extra/>
    <Gallery/>
    <Testimonials/>

    
      
    </div>
  )
}
