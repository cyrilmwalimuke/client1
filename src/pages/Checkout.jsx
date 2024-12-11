import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserSuccess } from '../features/user/userSlice'

export default function Checkout() {
    const { cartItems, total, amount,isInCart} = useSelector((state) => state.cart)
    const { currentUser} = useSelector((state) => state.user)
    const [contact,setContact] =useState('')
    const [email,setEmail] =useState('')
    const [adress,setAdress] =useState('')
    const [firstName,setFirstName] =useState('')
    const [lastName,setLastName] =useState('')

  
    const dispatch = useDispatch()


    const handleSubmit = async (e)=>{
        e.preventDefault()
        const res1  = await fetch('http://localhost:3000/post',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                userRef:currentUser._id,
                amount:amount,
                cartItems:cartItems,
                total:total,
                status:"pending"
            })
        })

        const res2  = await fetch('http://localhost:3000/stkPush',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
             phone:"0740860400",
             amount:"5000"
            })
        })
        const res3  = await fetch(`http://localhost:3000/update/${currentUser._id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
             contact:contact
            })
        })
        const data  = await res3.json()
        console.log(data)
        dispatch(updateUserSuccess(data))
        





    }
  return (
    <div className='sm:flex'>
         <div className='bg-slate-100 sm:h-screen sm:w-[50%] p-7'>
            <div className='flex flex-col gap-5'>
                {cartItems.map((item)=>{
                    return(
                        <div key={item.color} className='flex justify-between text-sm'>
                         

                            <div className='flex gap-3 w-[200px] items-start sm:w-[400px]'>
                                <img src={item.img} alt="" className='h-[70px] w-[70px]' />
                                <div>
                                    <p className='text-xs'>{item.title}</p>
                                    <p>{item.color}</p>
                                </div>

                            </div>
                            <div className='font-bold'>
                              kshs  {item.price*item.amount}

                            </div>
                            

                        </div>
                    )
                })}

            </div>
            <div className='mt-5 flex justify-between font-bold text-xl'>
                <p>Total</p>
                <p>kshs {total}</p>
            </div>

</div>
        <div className='sm:w-[50%] p-7 sm:h-screen '>
            
            <form onSubmit = {handleSubmit} className='flex flex-col gap-3 '>
                <p className='font-semibold'>Contact Infromation</p>
                <p>Email</p>
                <input type="email" className=' focus:outline-none border-[1.3px] border-black p-1'/>
                <div className='flex gap-2'>
                <input type="checkbox" name="" id="" className='bg-black text-white'/>
                <p className='text-xs'>Email me with news and offers</p>

                </div>
                <input placeholder='phone number' value ={contact} onChange={(e)=>setContact(e.target.value)} type="text" className=' focus:outline-none border-[1.3px] border-black p-2 text-xs'/>
                <p className='font-semibold'>Shipping Address</p>
                <div className='flex justify-between text-xs'>
                    <input type="text" placeholder='First Name' className='p-2 border-[1.3px] border-black w-[47%] focus:outline-none' />
                    <input type="text" placeholder='Last Name' className='p-2 border-[1.3px] border-black w-[47%] focus:outline-none'/>
                </div>
                <input type="text" placeholder='Address' className='text-xs p-2 border-black border-[1.3px] focus:outline-none' />
                {/* <div className='flex justify-between flex-wrap gap-1'>
                    <input type="text" className='text-xs p-2 border-black border-[1.3px] focus:outline-none'  />
                    <input type="text" className='text-xs p-2 border-black border-[1.3px] focus:outline-none' />
                    <input type="text" className='text-xs p-2 border-black border-[1.3px] focus:outline-none' />
                </div> */}
                <p className='font-semibold'>Payment Method</p>
                <div>
                    <div className='flex gap-3'>
                    <input type='radio' />
                    <p className='font-bold'>mpesa</p>

                    </div>
                    <div className='flex gap-3'>
                    <input type='radio' />
                    <p className='font-bold'>Other payment Options coming soon</p>

                    </div>

                    <div className='flex justify-center'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARUAAAC2CAMAAADAz+kkAAABOFBMVEX///8nbbX0nSPmDR4VV5/rYR0farRtmMrx9fpgj8Xr8fiSsdfU4vAcarMQVZ4AUZwSYrAAXq4AW63c5vEAV6sATpv0mxk9b6z1pSP+9ugxZqbrZx3qWh3l6/VchcPlABD3sUf+9PUASqX++fGIpdHrZR3udB/c4fNNfbTlAAD//foeXaKrv9mRq9QAUanoOh4+dLnubnb4wHvuaXH97tzwfYTnJh73tF3A0eSswttchLfzpCTnGSiDosjqTx3s7PnvgSCHn9AAQaHL1u25xuXwgoj3uWz6z9P2r7Tyl530oKb73bb6z534xYj86Mz74OLrSVT61qX1pTr4wcXsTljykSP0oAD7vFd5d43joDhDWp7SlUz/sgCrhG7qM0KyiWmmt93/vEYAMJq9iFP/6r9bYYuzl5FlisUXCb6jAAALWklEQVR4nO2bDXuaWBbHMVVAMICAMSXBJMZUG9HSJN2qqeMQaPqSJp0mbWZ2d7bLzs6u3/8b7H0BREV00qrz7HN+j0G4Vwj377nnnHu5MgwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH9e+Aey7vteLt089xDy2rpvfKm0FPYhKIV13/hSEdnMQ9gEVb6XKgeE5Lrjw2P0+qamfEdWpsqbt+9ePMe8e/9mUpmzqw/XJ5gPVzeH36lh38RqVPn4+qdXj/ZCXv304s2o7vGnl7cbWwEbG/snN+s3mVWocne693TvUYy9vaef76jBnF0TLUagw/2rdRvM8lX5+OLRmCSBMI9Okb0cXt+OSRIK8/JmiU1egKWr8vZVgiZEl6fvb/a3EkTBumxcr9VclqzKwbunyZpg/vLjdqImRJfLx8tteCpLVuXFDEMhohzl0mR5uUZZlqrKwWmKpTzb2dndTZPldn2yLFWVd6mWspPL5VJleTnuWx6fPY4Yq+FNAWFqaMgq0N3Y4NXsdC3R6nYmBm6mOfG5lanydrYmjx7tYlFyu7kvKbJcxzOXw5Pz29v9kMuzUU3fKGOMAmM2yK7RDfWyGuVmVpKlbNPoWSMNug16hrh6VQ7SRPnhSY6wezRTFCTLVfx6h79fv9y+36bcb0fmohmyhCj1eKaTxXtSthNoYpSQIBJ9lcpm1OgSOUOSG8LKVXmRFn52jnKBLGl96HwizT28ury/3z4nsvweFlqozVnUcAvZQJbslkl3ETgZH4XIvVACXgrKJWPGhMjyVLl7Nbf/UFL70NRlb37eJrrch1V8TyYtxKbQp7vEBPheKS5KVu5HbS6FZaXOLFWUYrFINsom3k7CssEOqVbwEbuIKgfP01xtTJTdJ2lx6Gzqwtovf/0Vy3IZ2FEhaCBuNFVF5nB5P2y7JMukH4VOhO9FapVmOBZRGbZqNTvfqrU4hUO7Tg1Dtxz6s22608pnOLTBRxV2AVU+ppnKDzFVcrsbKbJcTV1YsP/2dyxLmM9QJbJV1BkE2l5iFWaWtl3O9jiOa8glKXTBnXivmqFKe8APGNFl6gPe4fkBemHIFv2bAWOSQ2bAm46Adlz0ab+4yc5V5XWaVzk6iqvy4/lsVV5OZ/5i9eIfv25v3wZjJdp60j6tTPct/CkqlsTRyMN3e+Et0x5Ha5vJsbnm8Jlqnmc4XfUYV2+Lnq62qxcFW2+3ddequsywfaHWxape5+tK1Uf3VPfUBVT5mtKBnsVNJbe7M9tWNramu1A3q1eRLOfUjDol2kuwJRSa1AKwtwhdTBR4wvZr1IYkepo5dXkivOa1daXADIvtGuOouui1nU63KxTtjqjnW7pXqw79rmvrOseYil7kxaq7iCofU/rPeAdCwflLiirTXUgzsnL1n7/efyJHcQfbCaKRGTmPIBzFof7GKKe5W5fJVDy1xnCKbQ9sVhE9FfkYX2Dtuq8Pa4pfsdH/s9qeo2iCklFrorqQrbxN87W78Q40JwpdTl+7IRFZTrC7DTsNcZuiFHWLIDJl5fLEnfIGUa7XbY7Om4J3q06hqAiO4imVjJNBqlSGFcfMFNuq7VrFlt3ADq7o1qoio4s1PcMupEp6sj8uSmrK8vP0tfG33W7f/gu7nC41jya5Hy6wG/KhwHvIhjiWqtETZNFsSlG4mgY5lLZa9B3FrOgVj0V+xcc+F4WmdoWxVC+veryrFHVdHdYVi9eVzEKqpA6WdyZUSYnNG+fT7raAs7OLX+7PIpOQ86QisBvS0k6Ywkly0xrpQsMU6mQ8+bCUnN12LoYC4xaLlQvG/602qPa9alEpqgW9wrR+a4kXrqtUh3YVdT/uwmm3GL+qL+RX0lR5NqXKbFE2NqZV4fHXLLX/jbJbbSwbCw4s+nVHuRpK9iP3QcMyNieip2QkOhZX1OoO3/E9kdFEk/cLpuiLoshbHi9YqNRk6pZrWYzjCaLnFwTe8vkFVDlOy+G+VRXaoPZ/PoRpqmSQAKNR8wgkEhqj3FbOWsGptGNh4YjXlaIsZgyt7laqtTrCdYMXOajXa60BenNrLXzgV213gN4dH9U5SmattsJYpGnV/x4zxihBiYJ0M7g3vj8aB0lBFitQz2OYuIsRffrTl0f5iq6yGUVFFFVdVZH70PEf2hbxXlikZlhyqOB9/BB2rap0aPwoh6HYoHcTGM5obGyVY+aijT4SJL9R9jeFyG5mMuzm5iYa76h4uIM2qkL20LAHaaUgL6OqCn0jHyBlK/O2SaoIDdpYXoyNe8IQJPdG+apgGWEiS4yCpyc2cR8L3K2RlMdFY2Y2YwkmQtME1+7wmkYP8Fagb6YmREXmjImJiO8WmfeTnplR79AUGzSgBB4ziEdjfULoB+MhqcyPZhoKuAkc9UJJ3+9IFXvgOjXH8R1HYwZOy0dDxFadJ0U8qqk5/sDDR7znIOaI8seyuNS5/qSrU8fSNIL20kIzntDFPktnU/BcCh8kNM1Go9xoUJ9USnK3cVW4qm2zNf/Crg8vPK6dyei2VyzaStuptTM2O3R0FtW3dMVWhvNU+QMZf+7oS8rw8FPS1QvZGOF0QIE2sznRTD4vh6qEp0l0xi47bVpJqiiuoAloSMyqFsNl6kxG9zdR2FZtTvUFjeeqLcFkhng7f63T1xRVJkeHKV4lYXSIKY8mlKRm4BmoD6autzPyFoEvwT1olMKMoJnwbFXqNRRiqhWGH7aHyNgUbohsJcNWbLXVUlAN5yFHyzq+gnzvXFtJn5/8ppkEDDeaDYhiazBTiUMQX25EeX4/mGdBLrkpJahiJLjIuK3UFE+ra4zL6orLcEXWHrp1BXcgpqX7WsFkNM+zq67p+bbuzVNl8S6UOuuU2IFi+TwylTA77ccmWgy5JBv5viXmm0FwRrldMDMpRZCjbEJ2O9aD2o5fc90267F6nVMExuTdC39g62arOvRrvldrOUW15eNtfZ4qB6ffYYZyI2GGkiBEX7sUBmI+PxoFdUjjZZnMTVJRetEEr9FrEHq0G0oJw+aYKppVQThOxWXcCoo5KMPzzYrH1CuOP6xUbMdH1UPPI9t5ojDMXZqxxGazd//YbHYgQTShVgpzeYE2kvjebnair+AJhcDvZK1wHSjNAZPcbUwVN1xmKnAmec9f1Bie8erRalK6pBRvB8lzWGM8T33ysUiykpjCBfcd2UpYojVHoyBRHhelhCefgrBcjiIFGWUiY5t2LLEnH3aFMsyo9hDvZDYzlWGFzQwrEwxtdYHnQR9TulDkWXZzD/AqDBM+D5NG45gOffKFZ7V5rkQfjVEnUpL7Gh5e0xNiMyr08Zox3ZaYKqwSgAZGwfsm3kblcRZ6opomS25nfv85mb0WTGs0DUJ0I92gAJuC2W8YTexZkDJGuU+HQLS+GbtzjhQ1p93tA5+SzZ/NRhy/TnW4R3OT/bRFCWZBI0QFAikohAVmx7LEvmh1C/zYCfEb5+kp08nXcldqfE5dqXGE4k9KqnI+I/6sgCWv6kkNz0e5J9szVdnaX58oS18Blvaw7Fnq4pU1irL81YLvk1ZQYvaevrvaT14suLG1dbLOZXGrWFn6fC9pZene6R3DPD5JXlm6P/1sbKWsYBXywdvPT/cm7eTrW7IK+fjmZGIVMtLk9tNaDYVZ0Yr14zfPv8ZXrH89vRst5T/7sD9asb61cXu59pXZq/t1w8Hd+9fPTzGv3919HK87vPl0fXKJuf5wtW4zIfx5fgmDWf/vGijwq6kkQJUkQJUkRPg1ZgLd/MP4//7lLi88jHXfNwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsm/8BKOKuMnnQI+wAAAAASUVORK5CYII=" alt="" className='h-10 w-20' />

                    </div>
                    
                </div>
           
                {/* <input type="text" placeholder='phone number' className='bg-white p-3 focus:outline-none border-black border-[1.5px] rounded-lg' />
                <input type="text" placeholder='adress' className='bg-white p-3 focus:ouline-none border-black border-[1.5px] rounded-lg'/> */}

                <button className='bg-green-300 p-3 rounded-lg '>PAY NOW</button>
            </form>
        </div>
       

      
    </div>
  )
}
