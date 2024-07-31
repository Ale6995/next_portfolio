import { serviceData, } from '@/data'
import React from 'react'
import { CustomTile } from './ui/CustomTile'
import { CardContainer,  } from './ui/3d-card'

function Services() {
    return (
        <div className='p-20 bg-beige' id='services'>
            <img src="/stars-white.svg" alt="stars icon" width="100px" className='absolute left-[50px]' />
            <img src="/stars-white.svg" alt="stars" width="80px" className='absolute right-[30px] ' />
            <h1 className="heading text-4xl md:text-6xl text-Black">
                Our
                <span className="text-white"> Services </span>
            </h1>
            <div className='w-full mt-24 gap-10 items-center'>
                {/* <img src="girlLaptop.svg"  alt="girl hiring" width="500px"  /> */}
                <div className='w-full mt-2 grid lg:grid-cols-5 grid-cols-3 gap-4'>

                    {serviceData.map((card) => (
                        <CardContainer className='flex-1 ' >
                            
                                <CustomTile className='flex-1 ' title={card.title} />
                            
                        </CardContainer>
                    ))}
                </div>


            </div>
        </div>

    )
}

export default Services