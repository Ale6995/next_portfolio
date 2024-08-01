import React from 'react'
import { MagicButton } from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import LeadForm from './ui/leadForm'

function Footer() {
    return (
        <footer className=" w-full pt-20 pb-10 mb-[100px] md:mb-[5px]" id="contact">
            <div className='w-full absolute left-0 -bottom-72  min-h-60'>
                {/* <img src="/footer-grid.svg" alt="grid" className='w-full h-full opacity-50' /> */}

            </div>
            <div className='flex flex-col items-center ' >
                <h1 className="heading lg:max-w-[90vh]">
                    Ready to take your company to the
                    <span className="text-brown"> next level</span>
                </h1>
                <p className="text-center text-black my-5  md:mt-10">
                    Reach out to us today and let&apos;s discuss how We can help you achieve your goals</p>

                <LeadForm />
                <a href="mailto:contact@empire-hire.com?subject=Let&apos;s work together! ">
                    <MagicButton title='Email us now!' position='right' icon={<FaLocationArrow/>}  />
                </a>
                <div className='flex mt-10 md:flex-row flex-col justify-between items-center'>
                    <div className='flex items-center md:gap-3 gap-6'>
                        {socialMedia.map((profile) => (
                            <a key={profile.id} href={profile.link} target='_blank'>
                            <div key={profile.id} 
                            className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-brown-100 rounded-full '>
                                <img src={profile.img} alt={String(profile.id)} width={25} height={25} />

                            </div> </a>
                        ))}

                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer