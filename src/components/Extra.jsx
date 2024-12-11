import React from 'react'

export default function Extra() {
  return (
    <section className="my-7 bg-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-semibold">Product Features</h2>
      <p className="mt-4 text-gray-600">
        A quick overview of the amazing features of this portable blender.
      </p>
      
      {/* Features Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        <div className="p-6 rounded-lg shadow-md flex flex-col justify-center items-center gap-3">
          <img src="/compact.png" alt="" className='h-7 w-7' />
          <h3 className="font-semibold text-lg">Compact Design</h3>
          <p className=" text-gray-500 text-xs">Easy to carry and store wherever you go.</p>
        </div>
        <div className="p-6 rounded-lg shadow-md flex flex-col gap-3 items-center">
          <img src="/rechargable.jpg" alt="" className='h-7 w-7' />
          <h3 className="font-semibold text-lg">Rechargeable Battery</h3>
          <p className=" text-gray-500 text-xs">Blend anywhere with a long-lasting battery.</p>
        </div>
        <div className="p-6  rounded-lg shadow-md flex flex-col items-center gap-3">
          <img src="/powerful motor.avif" alt="" className='h-7 w-7'/>
          <h3 className="font-semibold text-lg">Powerful Motor</h3>
          <p className=" text-gray-500 text-xs">Blend even the toughest ingredients with ease.</p>
        </div>
      </div>
    </div>
  </section>
  )
}
