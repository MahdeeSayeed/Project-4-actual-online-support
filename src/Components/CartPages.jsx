import React from 'react'
import Container from './Container'
import BreadCrumbs from './BreadCrumbs'
import { Flex } from 'antd'
import CartItems from './CartItems'
import LCD from '../assets/LCD.png'
import { useDispatch, useSelector } from "react-redux";


const CartPages = () => {

  const data = useSelector((state) => state.AllProducts.Cart);
  const subtotal = useSelector((state) => state.AllProducts.Cart);
  
  
  
  return (
    <>
    <Container className='pb-35'>
     
      <BreadCrumbs className='py-20'/>
      <div>
        <Flex className='justify-between py-6 px-10 shadow-sm'>
          <div></div>
          <h4>Product</h4>
          <h4>Price</h4>
          <h4>Quantity</h4>
          <h4>Subtotal</h4>
        </Flex>
      </div>
      <div>
        {
          data.map((item, index)=>{
           return <CartItems  key={index} id={item.id} quan={item.quantity} imgSRC={LCD} title='$650' subtotal={(item.price * item.quantity). toFixed(2)}/>

          })
        }
      </div>
    </Container>

    </>
  )
}

export default CartPages