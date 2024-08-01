import { why_us,  } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'
import { CustomCard } from './ui/CustomCard'

function WhyUs() {
    return (
        <div className='p-10 flex flex-col items-center ' id='why-us'>
            <div className='w-full'>
            <img src="/sunrays.svg" alt="sunray icon" width="100px" className='relative ' />
            <h1 className="heading">
                What Makes Us
                <span className="text-brown"> Different? </span>
            </h1>
            <img src="/sunrays.svg" alt="sunray icon" width="70px" className='absolute right-[30px]' />
            </div>
            

            <div className='w-full max-w-[1280px] mt-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>

           
            {why_us.map((card) => (
                <CustomCard key={card.id} className='flex-1 gap-4 'text={card.text} title={card.title}/>
                
            ))}
             </div>
        </div>

    )
}

export default WhyUs