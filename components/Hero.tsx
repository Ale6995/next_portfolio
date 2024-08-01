
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from 'next/image'
import { cn } from "@/utils/cn";
const Hero = () => {

  return (
    <div className={`pb-0 mb-15  pt-26 bg-pink`} >


      <img src={"/stars.svg"} alt={"stars"} className="absolute top-20 right-10 w-[80px] z-20 fill-white" />

      <img src={"/stars.svg"} alt={"stars"} className="absolute top-96 left-10 w-[80px] z-20" />

      <div className="flex flex-col items-center relative pt-20 z-10">


        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">


          <h2 className="uppercase tracking-widest text-s text-center   text-gray-400 max-w-80 mt-4">
            We are
          </h2>

          <TextGenerateEffect
            words="Empire Hire"
            className="text-center text-[60px] md:text-8xl lg:text-8xl"
          />

          <h2 className="text-center md:tracking-wider mb-4 text-lg md:text-lg lg:text-2xl text-gray-400">
            Toronto&apos;s Leading Staffing Agency for Top Talent & Employers
          </h2>



          {/* <a href="#about">
            <MagicButton
              title="Show my work"
              position="right"
              icon={<FaLocationArrow />} />
          </a> */}
        </div>
        <div className="flex items-end justify-center min-h-[380px] w-full">

        <motion.div
                initial={{
                    opacity: 1,
                    height: 0,
                    width: 0,
                }}
                animate={{
                    height: 240,
                    width: "100vw"
                }}
                transition={{
                    duration: 0.5,
                }}
                className={cn(
                    "flex items-center justify-center w-full bg-beige",
                    
                )}
            />
          
          <motion.img src={"/Hero_girl.png"} alt={"Girl banner"} className={cn("absolute w-auto h-auto max-w-full max-h-[380px]")}initial={{
                    opacity: 0,
                    y: 500,
                }}
                animate={{
                    opacity: 1,
                    y:0
                }}
                transition={{
                    duration: 0.5,
                }}
                    
                 />
          
          <a href="tel:+16478944117">
            <div className="absolute right-0 bottom-0 call-us bg-beige-100 h-11 text-center p-4">
              <p>Call Us Today +1 647 894 4117</p>
            </div>
          </a>
        </div>
        {/* <div className="flex justify-center text-center w-full h-[380px] ">
          <div className="bg-beige w-full h-[260px]  bottom-0  top-auto " />
          <div className="left-0 right-0">
            <img src={"/Hero_girl.png"} alt={"Girl banner"} className="absolute h-96" loading="lazy" />


          </div>


        </div> */}
      </div>
    </div>
  );
};

export default Hero;