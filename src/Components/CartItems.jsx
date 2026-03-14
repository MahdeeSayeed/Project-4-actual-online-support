import { Flex } from 'antd';
import React from 'react'
import LCD from '../assets/LCD.png'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { DecrementReducer, IncrementReducer, removeReducer, SubtotalReducer } from '../Slice/ProductSlice';
const CartItems = ({imgSRC, title, subtotal, id, quan, price}) => {

   
   const dispatch = useDispatch();
  
  const handleRemove=()=>{
  
        dispatch(removeReducer(id))
       
    }

     const handleIncrement=()=>{
         dispatch(IncrementReducer(id))
         dispatch(SubtotalReducer())
     
            console.log(subtotal)
    
        }
     const handleDecrement=()=>{
             dispatch(DecrementReducer(id))
     }


  return (
   <>
   <Flex className='justify-between'>
       <div className='flex items-center w-42.5'>
        <div className='relative'>
     <span  onClick={handleRemove} className=' absolute  top-0  left-0 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex justify-center items-center cursor-pointer'>X

     </span>

        </div>
        <div className='flex justify-between gap-59'>
        <h1>Product</h1>
      <img src={imgSRC} alt='LCD screen' className='w-13.5 h-13.5'/>
      <h1>Price</h1>
      <h2>${price * quan }</h2>

       </div>
         <div>
          <h1 className='mt-5'>Quantity</h1>
      <div className='flex gap-1 items-center py-1.5 px-3 border border-gray-300 rounded-sm mt-10'>
        <span>{quan}</span>
        <div>
          <IoIosArrowUp className='cursor-pointer' onClick={handleIncrement}/>
          <IoIosArrowDown className='cursor-pointer' onClicK={handleDecrement}/>
        </div>


         </div>
        <span>{`${name.slice(0,10)}...`}</span>
      </div>
     <div className='flex ml-20'>
      <h2>{Number(quan * price).toFixed(2)}</h2>

        </div>

     </div>
    </Flex>
     <div className='flex justify-between'>
     <div className='w-39 h-10 border-1 flex justify-center items-center'>
      <h1>Return to Shop</h1>
     </div>
      <div className='w-39 h-10 border-1 flex justify-center items-center mr-29'>
      <h1>Update Cart</h1>
     </div>




     </div>

      <div className='flex mt-19'>

      <input className='border-1 border-black h-10' type='text'placeholder='Coupon code'/>

      <button className=' bg-primary w-40 h-10 ml-3 text-white font-poppins'>Apply Coupon</button>
      
       
       <div className='mb-20 w-76 h-50 border-1 ml-114'>
       
         <div>
        <h2>Cart Total</h2>

         </div>
         <div className='flex justify-between border-b-1'>
        <p>Subtotal:</p>
        <p>$1750</p>

         </div>
         <div className='mt-5 flex justify-between border-b-1'>
        <p>Shipping:</p>
        <p>Free</p>

         </div>
         <div className='mt-5 flex justify-between'>
        <p>Total:</p>
        <p>${subtotal}</p>

         </div>
      <button className=' bg-primary w-47 h-9 ml-14 text-white font-poppins'>Apply Coupon</button>
         
       </div>
     </div>




     </>
  )
}

export default CartItems