import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'

function Experience() {
    return (
        <div className='py-20' id='experience'>
            <h1 className="heading">
                My Work {" "}
                <span className="text-purple"> Experience</span>
            </h1>
            <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>

           
            {workExperience.map((card) => (
                <Button key={card.id} borderRadius='1.75rem' duration={(Math.random()*500+1000)} className='flex-1 text-white border-neutral-200 dark:border-slate-800 gap-2 '>
                    <div className='flex lg:flex-row flex-col lg:items-center p3 py-6 md:p-5 lg:p-10 gap-2'>
                        <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16' ></img>
                        <div className='lg:ms-5'>
                            <h1 className='text-start text-xl md:text-2l font-bold'>
                                {card.title}
                            </h1>
                            <p className='text-start text-white mt-3 font-semibold'>
                                {card.company}
                            </p>
                            <p className='text-start text-white-100 mt-3 font-semibold'>
                                {card.desc}
                            </p>
                        </div>
                    </div>

                </Button>
            ))}
             </div>
        </div>

    )
}

export default Experience