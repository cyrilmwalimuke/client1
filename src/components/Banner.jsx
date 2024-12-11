import React, { useRef } from 'react'
import { Link } from 'react-router-dom';

export default function Banner() {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  // Handle pause when mouse leaves
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };
  return (


    <div className="relative">
     
       <video
        className="w-full h-[500px] object-cover"
        autoPlay
    
    
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        muted
        loop
      >
        <source src="/banner3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

  {/* <img src="banner-lg.png" alt="Background Image" class="w-full h-[700px]"/> */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className='flex flex-col items-center text-white'>

           <h1 className='text-center text-4xl sm:text-6xl'>
            The Best Portable Blender You Need!
          </h1>
          <p className='text-center text-lg sm:text-xl'>
            Perfect for smoothies, shakes, and more – blend on the go!
          </p>
      
     
      <Link to='/shop' className='text-white text-lg border-white border-[1.6px] mt-[50px] sm:mt-[150px] p-2 hover:p-3'>
    
        SHOP NOW
      

      </Link>
    
    </div>
  </div>
  
</div>
    
        
    
  )
}
