"use client";
import { use, useEffect, useState } from "react";
import { MagicButton } from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Spotlight } from "./ui/spotlight";
import { FaLocationArrow } from "react-icons/fa";
import Alert from "./ui/Alert";

const Hero = () => {
  const [mobileWarning, setMobileWarning] = useState(false);
  useEffect(() => {

    setMobileWarning(window.innerWidth > 1200 ? true : false);
    const onResize = () => {

      setMobileWarning(window.innerWidth > 1200);

    };

    window.addEventListener('resize', onResize);
  }, []);

  return (
    <div className={`pb-36 ${mobileWarning ? 'pt-26' : 'pt-36'}`} >
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center">
      
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div> */}


      <div className="flex justify-center relative my-20 z-10">


        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {mobileWarning && (<Alert type={"Success"} message={"There is a 3d Version of this website!"} onClose={function (): void {
            throw new Error("Function not implemented.");
          }}></Alert>)}

          <h2 className="uppercase tracking-widest text-xs text-center dark:text-blue-100 text-black-200 max-w-80 mt-4">
            Web & Mobile
          </h2>

          {/* TODO:Chang this captions */}
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-6xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-1xl dark:text-blue-100 text-black-200">
            Hi! I&apos;m Alejandro, a Full Stack Developer based in Toronto, Canada.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              position="right"
              icon={<FaLocationArrow />} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;