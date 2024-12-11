import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'
import { CiSearch } from "react-icons/ci";

const products = [
  {
    id: 'rec1JZlfCIBOPdcT2',
    title: 'Electric Juicer Mini Portable Blender Fruit Mixers - Green',
    price: '3000',
    img: '/pic 10.jpg',
    amount: 1,
    color:'white',
    inStock:true
  },
  {
    id: 'recB6qcHPxb62YJ75',
    title: 'Electric Juicer Mini Portable Blender Fruit Mixers - Purple',
    price: '3000',
    img: '/pic 10.jpg',
    amount: 1,
    color:"purple",
    inStock:false
  },
  {
    id: 'recdRxBsE14Rr2VuJ',
    title: 'Electric Juicer Mini Portable Blender Fruit Mixers - Blue',
    price: '3000',
    img: '/pic 10.jpg',
    amount: 1,
    color:"blue",
    inStock:false
  },
  {
    id: 'recwTo160XST3PIoW',
    title: 'Electric Juicer Mini Portable Blender Fruit Mixers - Pink',
    price: '3000 ',
    img: '/pic 10.jpg',
    amount: 1,
    color:'pink',
    inStock:false
  },
]


export default function Shop() {
  const dispatch = useDispatch()
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(products);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter the data based on the 'title' attribute
    const filtered = products.filter(item => 
      item.color.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData(filtered);
  };


  return (
    <div className='py-7 px-7'>
      <h1 className='text-center  font-bold text-4xl '>OUR SHOP</h1>
      <div className=' mb-7 flex justify-center'>
        <div className='w-[150px] h-[1.9px] bg-gray-400'>

        </div>
      </div>
      <form className='flex mb-7 text-sm justify-center gap-3 items-center'>
      <input 
      type="text" 
      value={searchQuery} 
      onChange={handleSearch} 
  
      
      
       placeholder='search by color....' className='border-[1.3px] border-black px-3 py-1 rounded-xl focus:outline-none'/>
      <button>
      <CiSearch size={25} />
      </button>


      </form>
     
    
        <div className=' flex gap-5 flex-wrap justify-center sm:justify-start'>
          {
            filteredData.map((product)=>{
              return(

                <div>
                    <div className='flex flex-col gap-3 shadow-lg rounded-lg p-3 items-center'>
                  <img src={product.img} alt="" className='h-20 w-20 rounded-md '  />
                  <p className='text-xs w-[290px]'>{product.title}</p>
                  <div style = {{backgroundColor:product.color}} className='text-center p-1 rounded-lg text-xs w-20 border-[1.2px]'>
                    {product.color}

                  </div>
                  <p className='text-xs'>kshs {product.price}</p>

                </div>
              
                  <button onClick={()=>{
                    if(product.inStock===false){
                      alert('product out of stock')
                      return
                    }
                    dispatch(addToCart(product))
                  }} className='bg-black text-white rounded-lg text-xs  p-2 mt-7 self-center w-full'>
                    {product.inStock?'ADD TO CART':'OUT OF STOCK'}
                  
                  </button>

                </div>
                
              )
            })

          }


   
        </div>

      
    </div>
  )
}
