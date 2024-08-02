import { serviceData, } from '@/data'
import React from 'react'
import { CustomTile } from './ui/CustomTile'
import { CardContainer,  } from './ui/3d-card'

function Services() {
    return (
        <div className='p-20 pt-10 bg-beige' id='services'>
            {/* <div className='w-full'>
                <img src="/sunrays.svg" alt="sunray icon" width="100px" className='relative ' />
                <h1 className="heading">
                    What Makes Us
                    <span className="text-brown"> Different? </span>
                </h1>
                <img src="/sunrays.svg" alt="sunray icon" width="70px" className='absolute right-[30px]' />
            </div> */}
            <div className='w-full'>
            <img src="/stars-white.svg" alt="stars icon"  className='relative w-[45px] md:w-[100px]' />
            <h1 className="heading text-4xl md:text-6xl text-Black">
                Our
                <span className="text-white"> Services </span>
            </h1>
            <img src="/stars-white.svg" alt="stars" className='absolute right-[30px] w-[40px] md:w-[80px]' />
            </div>
            <div className='w-full mt-24 gap-10 items-center'>
                {/* <img src="girlLaptop.svg"  alt="girl hiring" width="500px"  /> */}
                <div className='w-full mt-2 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4'>

                    {serviceData.map((card) => (
                        <CardContainer key={card.id} className='flex-1 ' >
                            
                                <CustomTile className='flex-1 ' title={card.title} />
                            
                        </CardContainer>
                    ))}
                </div>


            </div>
        </div>

    )
}

export default Services