import React from 'react'
type Props = {
  text: string
}
const Navbar: React.FC<Props> = ({ text }) => {
  return (
    <div className='flex w-full justify-between h-[100px] items-center md:px-[40px] shadow-md'>
      <div>
        <h1 className='text-cyan md:text-3xl  text-base font-semibold font-Roboto'>{text}</h1>
      </div>
      <div>
        <h2 className=' space-x-4 max-w-sm text-base text-black font-semibold font-Roboto'>Rex Stephen</h2>
        <p className='text-sm color-[#4C5059] font-normal not-italic font-Roboto'>Administrator</p>
      </div>
    </div>
  )
}

export default Navbar