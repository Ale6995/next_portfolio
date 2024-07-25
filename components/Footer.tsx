import React from 'react'
import { MagicButton } from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

function Footer() {
    return (
        <footer className=" w-full pt-20 pb-10 mb-[100px] md:mb-[5px]" id="contact">
            <div className='w-full absolute left-0 -bottom-72  min-h-60'>
                <img src="/footer-grid.svg" alt="grid" className='w-full h-full opacity-50' />

            </div>
            <div className='flex flex-col items-center ' >
                <h1 className="heading lg:max-w-[90vh]">
                    Ready to take your projects to the
                    <span className="text-purple"> next level</span>
                </h1>
                <p className="text-center text-white-200 my-5  md:mt-10">
                    Reach out to me today and let&apos;s discuss how I can help you achieve your goals</p>
                <a href="mailto:alejandro.morales.a@gmail.com">
                    <MagicButton title='Let&apos;s get in touch' position='right' icon={<FaLocationArrow />} />
                </a>
                <div className='flex mt-10 md:flex-row flex-col justify-between items-center'>
                    <div className='flex items-center md:gap-3 gap-6'>
                        {socialMedia.map((profile) => (
                            <div key={profile.id} 
                            className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                                <img src={profile.img} alt={String(profile.id)} width={20} height={20} />

                            </div>
                        ))}

                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer