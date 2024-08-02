"use client";
import { cn } from "@/utils/cn";
import { motion, MotionValue } from "framer-motion";
import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Icon } from "./TeamMember";
import { FaBeer, FaBriefcase, FaCalculator, FaClock, FaFileContract } from "react-icons/fa";
import { Fa1, Fa2, Fa3 } from "react-icons/fa6";
import { IconTitleList } from "./optionIcon";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
  useModal
} from "./AnimatedModal";
import QuickHireForm from "./QuickHireForm";

const transition = {
    duration: 0,
    ease: "linear",
};


export const GoogleGeminiEffect = ({
    pathLengths,
    title,
    description,
    className,
    handleClick
}: {
    pathLengths: MotionValue[];
    title?: string;
    description?: string;
    className?: string;
    handleClick?: () => void;
}) => {
    return (
        <div className={cn("sticky top-20 ", className)}>
            <p className="text-4xl md:text-7xl font-normal pb-4 text-center  text-beige ">
                {title}
            </p>
            <p className="text-xl md:text-xl font-normal text-center text-beige mt-4 max-w-lg mx-auto z-30">
                {description}
            </p>
            <div className="w-full h-[890px] -top-52 md:-top-44 p-10 flex items-center justify-center bg-red-transparent absolute z-30">
                <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 mt-16 md:mt-32 md:space-x-4">
                    
                    <IconTitleList items={[
                        { icon: Fa1, title: "Fill the form" },
                        { icon: Fa2, title: "Pay the deposit" },
                        { icon: Fa3, title: "We find your worker" },
                    ]} />
                    <AnimatedModalButton/>
                    {/* <button onClick={handleClick} className="font-bold bg-white rounded-full md:px-4 md:py-2 px-2 py-1 md:mt-24 mt-8 z-30 md:text-base text-black text-xs  w-fit  min-h-12 mx-auto ">
                        Fill your position now!
                    </button> */}
                    <IconTitleList items={[
                        { icon: FaCalculator, title: "Save on Linkedin" },
                        { icon: FaBriefcase, title: "Save on Indeed" },
                        { icon: FaClock, title: "Save time" },
                    ]} />
                </div>
            </div>
            <div className="w-full h-[800px] -top-[170px] md:-top-44 p-20 pl-32 flex items-center justify-center absolute z-10">
                <svg
                    width="1440"
                    height="890"
                    viewBox="0 0 1440 890"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" absolute z-10 "
                >
                    <motion.path
                        d="M671.917 577.2H534L630.542 375H809.833L727.083 509.8H865L644.333 712L671.917 577.2Z"
                        stroke="#FFC000"
                        strokeWidth="40"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        initial={{
                            pathLength: 0,
                        }}
                        style={{
                            pathLength: pathLengths[0],
                        }}
                        transition={transition}
                    />

                    <path
                        d="M671.917 577.2H534L630.542 375H809.833L727.083 509.8H865L644.333 712L671.917 577.2Z"
                        stroke="#FFC00090"
                        strokeWidth="35"
                        stroke-linejoin="round"
                        fill="none"
                        pathLength={1}
                        filter="url(#blurMe)"
                    />

                    <defs>
                        <filter id="blurMe">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    );
};


export function AnimatedModalButton() {
    const formRef = useRef<any>(null);
  
    const handleExternalSubmit = () => {
      if (formRef.current) {
        formRef.current.submitForm();
        
      }
    };
  
    return (
      <div className="flex items-center justify-center">
        <Modal>
          <ModalTrigger className="bg-white text-brown flex justify-center group/modal-btn">
            <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
              Find your worker
            </span>
            <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
              <FaFileContract color="#8C644F" />
            </div>
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                Give us all the{" "}
                <span className="px-1 py-0.5 rounded-md bg-beige text-brown border border-brown">
                  details
                </span>{" "}
              </h4>
              <QuickHireForm ref={formRef}  />
            </ModalContent>
            <ModalFooter className="gap-4">
              <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                Cancel
              </button>
              <button
                className="bg-brown text-white text-sm px-2 py-1 rounded-md border border-brown w-28"
                onClick={handleExternalSubmit}
              >
                Book Now
              </button>
            </ModalFooter>
          </ModalBody>
        </Modal>
      </div>
    );
  }


  
//   const QuickHireForm = forwardRef(({ onSubmit }: QuickHireFormProps, ref) => {
//     const [formData, setFormData] = useState({
//       name: "",
//       company: "",
//       phone: "",
//       address: "",
//       position: "",
//       salaryMin: "",
//       salaryMax: "",
//       duration: "",
//       startDate: "",
//       type: "hourly" // default selector value
//     });
  
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     };
  
//     const handleSubmit = (e: React.FormEvent) => {
//       e.preventDefault();
//       // Add form submission logic here
//       console.log("Form submitted:", formData);
  
//       // Call the onSubmit prop to close the modal
//       onSubmit();
//     };
  
//     useImperativeHandle(ref, () => ({
//       submitForm: () => {
//         handleSubmit(new Event("submit", { bubbles: true }) as any);
//       }
//     }));
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Your name:</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Name of the company:</label>
//           <input type="text" name="company" value={formData.company} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Phone:</label>
//           <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Address:</label>
//           <input type="text" name="address" value={formData.address} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Position to be filled:</label>
//           <input type="text" name="position" value={formData.position} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Selector:</label>
//           <select name="type" value={formData.type} onChange={handleChange}>
//             <option value="hourly">Hourly</option>
//             <option value="monthly">Monthly</option>
//             <option value="yearly">Yearly</option>
//           </select>
//         </div>
//         <div>
//           <label>Salary min:</label>
//           <input type="number" name="salaryMin" value={formData.salaryMin} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Salary max:</label>
//           <input type="number" name="salaryMax" value={formData.salaryMax} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Requirement duration:</label>
//           <input type="text" name="duration" value={formData.duration} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Start date:</label>
//           <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     );
//   });