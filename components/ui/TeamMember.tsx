"use client";
import { useMotionValue } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { CardContainer, CardItem } from "./3d-card";

export const TeamMember = ({
  name,
  img,
  className,
}: {
  name?: string;
  img?:string
  className?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1500);
    setRandomString(str);
  }

  return (
    <CardContainer className=" h-[450px] flex-col ">
    <div
      className={cn(
        "p-0.5  bg-transparent flex items-center justify-center w-full h-full relative",
        className
      )}
    >  
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="relative h-44 w-44 md:w-60 md:h-60 rounded-full flex flex-col items-center justify-center text-center text-brown ">
            
            
            <motion.img src={img} alt={"Member picture"} className={cn(" w-auto h-auto max-w-full max-h-[380px]")}initial={{
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
               
            
          </div>
          
        </div>
        
      </div>
    <CardItem translateZ={"50"}>
    <h1 className=" text-black font-bold text-2xl  mt-4">{name}</h1>
    </CardItem>
    </CardContainer>
  );
};

export function CardPattern({ mouseX, mouseY, randomString }: any) {
  let maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl  [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brown to-brown-100 opacity-0  group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay  group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "";
export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
