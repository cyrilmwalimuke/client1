import React from 'react'

export default function Testimonials() {
  return (

    <div className='py-16 px-8'>
      <h2 className='text-center text-3xl mb-7'>What Our Customers Are Saying</h2>
      <div className='flex flex-col sm:flex-row gap-5 mb-7'>
        <div className='flex flex-col gap-2 items-center text-center shadow-md py-5 px-3'>
          <img src="/profile1.jpg" alt="" className='rounded-full h-[50px] w-[50px]' />
          <p className='text-xs text-gray-600'>"Best investment for my busy mornings. Highly recommend!"</p>
          <p className='font-bold'>Lydia M.</p>
        </div>
        <div className='flex flex-col gap-2 items-center text-center shadow-md py-5 px-3'>
          <img src="/profile2.jpg" alt="" className='rounded-full h-[50px] w-[50px]' />
          <p className='text-xs text-gray-600'>"Super portable and powerful. I can't believe how easy it is to clean!"</p>
          <p className='font-bold'>Gloria K.</p>
        </div>
        <div className='flex flex-col gap-2 items-center text-center shadow-md py-5 px-3'>
          <img src="/profile3.jpg" alt="" className='rounded-full h-[50px] w-[50px]' />
          <p className='text-xs text-gray-600'>"This blender is a game changer! I use it every day for my smoothies."</p>
          <p className='font-bold'>Millicent J.</p>
        </div>
        


      </div>
      
      <div className='flex justify-center text-xs text-blue-400'>
      <button className='self-center'>
        show more
      </button>

      </div>

    </div>
    
  )
}
