import React from 'react'
import SideImage from '../assets/Side Image.png';
const Login = () => {
  return (
  <>
  
      <div className='w-100 h-60 mb-50 flex gap-90 mt-9'>
          <img src={SideImage}alt='Side-image'/>
      
          <div>
              <h1>Log in to Exclusive</h1>
              <p>Enter your details below</p>
              <input className='mt-4 border-b-1 w-59' type='text'placeholder='Email or Phone Number'/>
              <input className='mt-6 border-b-1 w-59' type='text'placeholder='Password'/>
              
              <button className='mt-8 bg-primary w-58 h-10 text-white mb-20px font-poppins font-medium'>Log in</button>
             
              <div className='text-red-600 relative left-69 bottom-9'>
                <button>Forget Password?</button>
              </div>
          </div>
     
      </div>
  
      </>
      
      
  )
}

export default Login