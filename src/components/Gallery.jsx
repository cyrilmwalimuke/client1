import React, { useEffect, useState } from 'react'
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
const images = [
    '/pic 2.jpg',
    '/pic 3.jpg',
    '/pic 4.jpg',
    '/pic 5.jpg',
    '/pic 6.jpg',
    '/pic 7.jpg',
    '/pic 8.jpg',
    '/pic 8.jpg',
    '/pic 9.jpg',
    '/pic 10.jpg',
  ];

  const products = [
    {
      id: 'rec1JZlfCIBOPdcT2',
      title: 'Electric Juicer Mini Portable Blender Fruit Mixers - Green',
      price: '3000',
      img: '/pic 10.jpg',
      amount: 1,
      color:'green'
    },
    {
      id: 'recB6qcHPxb62YJ75',
      title: 'Electric Juicer Mini Portable Blender Fruit Mixers - Purple',
      price: '3000',
      img: '/pic 10.jpg',
      amount: 1,
      color:"purple"
    },
    {
      id: 'recdRxBsE14Rr2VuJ',
      title: 'Electric Juicer Mini Portable Blender Fruit Mixers - Blue',
      price: '3000',
      img: '/pic 10.jpg',
      amount: 1,
      color:"blue"
    },
    {
      id: 'recwTo160XST3PIoW',
      title: 'Electric Juicer Mini Portable Blender Fruit Mixers - Pink',
      price: '3000 ',
      img: '/pic 10.jpg',
      amount: 1,
      color:'pink'
    },
  ]


export default function Gallery() {
  const dispatch = useDispatch()

    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically change the image every 3 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // 3000ms = 3 seconds
  
      // Clear the interval when the component unmounts
      return () => clearInterval(interval);
    }, [images.length]);
  
    // Change to the selected image based on dot navigation
    const handleDotClick = (index) => {
      setCurrentIndex(index);
    };
  return (
    <div className='px-7 py-8 flex flex-col sm:flex-row gap-5 '>


<div className="relative w-full max-w-2xl mx-auto sm:flex-1">
      {/* Image container with sliding effect */}
      <div className="relative overflow-hidden rounded-lg">
        <div
          className="transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            display: 'flex',
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[500px] object-cover"
            />
          ))}
        </div>
      </div>

      {/* Dot navigation */}
      <div className="flex justify-center mt-4 space-x-3 ">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-[5px] h-[5px] rounded-full ${currentIndex === index ? 'bg-black' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
    <div className='sm:flex-1'>
    <h2 className="text-3xl font-semibold">Your Perfect Blender On the Go</h2>
    <p className="mt-4 text-gray-600 text-xs sm:text-lg text-left ">
              Blend your favorite beverages, smoothies, and shakes wherever you are! The Portable Blender is designed to be compact, durable, and easy to clean.
              You can now make a smoothie wherever you go, a perfect gift for friends and family! A beautiful, lightweight and easy to use and clean blender. Small, friendly and satisfactory size for portability and that fits your need. A clear bottle at the middle where you can see your juice. New Version Portable Personal Blender Multifunctional small in size

            </p>

            
            <ul className="mt-6 text-left list-disc pl-6 text-gray-600">
              <li>Compact and Travel-Friendly</li>
              <li>Convenient USB Charging</li>
              <li>Easy to Clean</li>
              <li>Blends Smoothly in Seconds</li>
            </ul>

            
        </div>
        

    </div>
        




      
  
  )
}
