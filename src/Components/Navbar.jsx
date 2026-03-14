import React, { useState } from 'react'
import Exclusive from '/Exclusive.png'
import Flex from './Flex'
import  Container  from './Container'
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaBarsStaggered } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router";
import { useSelector } from 'react-redux';

const Navbar = () => {
   const [show, setShow] = useState(false)
   
   
   const [Inputvalue, setInputvalue]= useState('')
   const [FilterProducts, setFilterProducts]= useState([])
   
   let navigate = useNavigate();


   const handleClick=()=>{

     setShow(!show)

   }
 
    const handleSearch=(e)=>{
     

        const value= e.target.value

        setInputvalue(value)
 
        setInputvalue(e.target.value)
        
        if(Inputvalue.trim() == ''){

           setFilterProducts([])

        }else{
         
          const filterProduct= products.filter((item)=> item.title.toLowerCase().includes(Inputvalue.toLowerCase()))

          setFilterProducts(filterProduct)
         
        }
       
    }
    
    console.log(FilterProducts)


  const data= useSelector((state)=>state.AllProducts.Cart)
  const products= useSelector((state)=>state.AllProducts.value)

  

 
  return (
    <>

    <div>
  <Container className='flex justify-between'>
   
   
   
    <Flex className='relative flex items-center z-10 py-10 lg:py-0  mb-5 lg:mb-0 '>
 
   <img src={Exclusive}alt='Logo'/>

    <ul className='`{${show ? "block" :"hidden"}}` absolute lg:static text-center top-20.5 left-0 w-full lg:w-auto  lg: text-white lg:text-black  bg-black lg:bg-white  flex-col lg:flex-row lg:flex justify-center lg:gap-12 gap-5 leading-6'>

     <li className='hover:border-b-2 hover:border-black duration-[1s,15s] ...'>
      
      
      
      
      
       <NavLink to="/" end>
      Home
        
    
    
      </NavLink>
      
      
      
      
      </li>
     <li className='hover:border-b-2 hover:border-black   duration-[1s,15s] ... '>Contact</li>
     <li className='hover:border-b-2 hover:border-black    duration-[1s,15s] ...'>About</li>
     <li className='hover:border-b-2 hover: border-black    duration-[1s,15s] ... ' >Sign Up</li>
    <Flex className='flex justify-center gap-2'>
  <div className='lg:flex justify-between items-center relative w-60.75 lg:w-auto mx-auto  '>  
        
 <input className=' py-2.5 pl-2 text-black bg-white' type='text'

 value={Inputvalue}
 
 placeholder='What are you looking for?'
 
 onChange={handleSearch}
 
 />

   <ul className='bg-gray-400 absolute top-8 left-0 text-black '>

      {/* {

        FilterProducts.map((product)=>(
          
          <li key={products.id}>{products.title}</li>
          ))


      } */}

      {FilterProducts.map((products)=>{ 
        
        return<li onClick={()=>navigate(`/ProductDetails/${products.id}`)} className='flex gap-2  border-b py-4 px-1.1 '>
        
        <img src={products.thumbnail}alt='' className='w-10 h-10'/>
        
        {products.title.slice(0,15)}
        
        
        </li>})}


   </ul>


<div className='flex justify-between gap-4 items-center'>
  <div className='flex justify-between'>
    <div className='flex justify-between gap-1'>

   <HiMagnifyingGlass className='absolute lg:right-10 bottom-1  flex justify-center items-center gap-1 right-59 text-black' /> 



<CiHeart className='mt-5 lg-mt-0text-2xl relative left-9  -top-2 bottom-9'/>
  <div className='relative left-9 top-2'>
  <NavLink to='CartItems'>

    <CiShoppingCart className='text-2xl' />


  </NavLink>

    <span className='absolute top-0 left-0 flex items-center justify-center w-5 h-5 rounded-full bg-primary text-white text-xs'>{data.lenght}</span>
  </div>
    </div>
   

  </div>



</div>
 

 </div> 






   </Flex>
   



        
  <div>
   <FaBarsStaggered onClick={handleClick}className='flex justify-end items-end absolute right-1  text-3xl lg:hidden'/>

  </div>
     





   
    </ul>


    </Flex>

 

  </Container>

    
    
    
    
    
    
    






    </div>



 

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  
    </>
  )
}

export default Navbar