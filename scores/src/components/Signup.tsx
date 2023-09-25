
import Logo from "../assets/logo.svg"
import { Input } from "./Input"

import { ButtonMedium } from "./Button"

const Signup = () => {
  return (
    <div className='sm:flex  sm:items-center h-screen sm:w-full  '>
       <div className='sm:h-screen bg-cyan sm:w-1/2 sm:flex sm:justify-center sm:items-center md:px-4 '> 
       <div className='text-center'>
       <img src={Logo} alt="" className=" max-w-sm mx-auto mb-10"/>
        <h1 className='text-white font-[Roboto] leading-6 font-bold text-4xl mb-2 '>Create Account</h1>
        <p className='sm:w-60 sm:h-11 text-darkWhite leading-6'>Join the community and have fun predicting!</p>
        </div>    
 
        </div> 
       <div className="sm:max-w-sm mx-auto px-4 py-6 sm:py-10 ">
        <form className=" ">
           <label htmlFor="" className="">
            <span className="text-base font-normal font-[Roboto] ">First Name</span>
             <Input className="sm:w-[514px] sm:pl-6 w-full placeholder:text-xs pl-6 md:w-[400px]" 
             type="text"
             placeholder="First Name"
             />
           </label>

           <label htmlFor=""className="" >
            <span  className="text-base font-normal font-[Roboto]">Last Name</span>
             <Input className="sm:w-[514px] pl-6 w-full placeholder:text-xs md:w-[400px]" 
              type="text"
              placeholder="Last Name"
             />
           </label>

           <label htmlFor="">
            <span  className="text-base font-normal font-[Roboto]">UserName</span>
             <Input className="sm:w-[514px] pl-6 w-full placeholder:text-xs md:w-[400px]"   
              type="text"
              placeholder="UserName"
             />
           </label>

           <label htmlFor="">
            <span  className="text-base font-normal font-[Roboto]">Email Address</span>
             <Input className="sm:w-[514px] pl-6 w-full placeholder:text-xs md:w-[400px]" 
             type="email"
             placeholder="email address"
             />
           </label>

           <label htmlFor="">
            <span  className="text-base font-normal font-[Roboto]">Password</span>
             <Input className="sm:w-[514px] pl-6 w-full placeholder:text-xs md:w-[400px]" 
             type="password"
             placeholder="password"
             />
           </label>
           <label htmlFor="">
            <span  className="text-base font-normal font-[Roboto]"> Confirmed Password </span>
             <Input className="sm:w-[514px] pl-6 w-full placeholder:text-xs md:w-[400px]"  
             type="password"
             placeholder="comfirm password"
             
             />
           </label>
           <div className="text-center ">
           <ButtonMedium className="bg-cyan text-white ">Sign Up</ButtonMedium>
           </div>
           
        </form>
        <div className="text-center mt-3">
        <p>already have an account? <span className="text-cyan " > <a href="/login">Login Here</a></span></p>
        </div>
        
   
       </div>
    </div>
  )
}

export default Signup