import React from 'react'

interface CardProps {
    title?: string
    children?: React.ReactNode
}

const Card = ({ title, children }: CardProps) => {
    return (
        <div className='w-[346px] h-[168px] bg-cyan rounded-2xl text-white p-6 '>
            <h1 className='w-[138px] text-base font-medium text-[#E0E0E0]'>{title}</h1>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Card