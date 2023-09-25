import React from 'react'
import Logo from "../assets/logo.svg"
import { Input } from './Input'
import { ButtonMedium } from './Button'

const Login = () => {
  return (
    <div className='h-screen bg-cyan sm:flex sm:justify-center sm:items:center ' >
    <div className='sm:mx-auto sm:mt-11 px-10 '>
        <img src={Logo} alt=""  className='max-w-sm mx-auto pt-4'/>
    <form action="" className='sm:w-[27.75rem] sm:h-[30.25rem] bg-white shadow-2xl rounded-md w-full h-auto px-4 py-8 mt-20 sm:pt-20 sm:mt-20 md:mt-3 '>

        <label htmlFor="" className=' '>
        <span className="text-base font-normal font-[Roboto]">Email address</span>
        <Input className='sm:w-[400px] pl-6 w-full placeholder:text-xs h-10 mb-[-24px] sm:mb-[-18px] '
        type='email'
        placeholder='email'
        
        />

        </label>
        <label htmlFor="" className=''>
        <span className="text-base font-normal font-[Roboto] ">Password</span>
        <Input className='sm:w-[400px] pl-6 w-full placeholder:text-xs h-10 mb-[-24px] sm:mb-[-28px]'
          type='text'
          placeholder='password'
         
        />
      
        </label>
      
         <div className='text-center py-10'>
         <ButtonMedium className='bg-cyan text-white text-sm font-[Roboto]'>Login</ButtonMedium>    
         </div>
      
    </form>
    <div className="text-center mt-3">
        <p>don't have an account? <span className="text-white " > <a href="/">register Here</a></span></p>
        </div>
    </div>

    </div>
  )
}

export default Login