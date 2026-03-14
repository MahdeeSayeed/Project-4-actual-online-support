import React from 'react'
import SideImage from '../assets/Side Image.png';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router';








const Signup = () => {
  
    const handleChange=()=>{
    let navigate= useNavigate()
    navigate('/Login')

    }
  
  
    return (
  

    <>

    <div className='w-100 h-60 mb-50 flex gap-90 mt-9'>
        <img src={SideImage}alt='Side-image'/>
    
        <div>
            
            <h1>Create an account</h1>
            <p>Enter your details below</p>
            <form onChange={handleChange}>
            <input className='mt-4 border-b-1 w-59'type='text'placeholder='Name'/>
            <input className='mt-4 border-b-1 w-59' type='email'placeholder='Email or Phone Number'/>
            <input className='mt-4 border-b-1 w-59' type='password'placeholder='Password'/>
            <button className='mt-8 bg-primary w-58 h-10 text-white mb-20px font-poppins font-medium'>Create Account</button>
            <button className=' border-1 mt-4 bg-white w-58 h-10 text-black mb-20px font-poppins font-regular'><FcGoogle className='absolute top-110'/>Sign up with Google</button>

           <div>

            <p className='flex'>Already have account?</p>
           </div>
            <div>
            <p className='border-b w-10'>Login</p>
                </div>
            </form>
        </div>
   
    </div>

    </>
    
    
   


    
  )
}

export default Signup