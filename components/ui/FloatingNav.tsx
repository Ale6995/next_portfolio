"use client";
import React, { useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const FloatingNav = ({
    navItems = [],  // Default to an empty array if not provided
    className,
}: {
    navItems?: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {

    const { scrollYProgress } = useScroll();

    const [visible, setVisible] = useState(true);



    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            let direction = current! - scrollYProgress.getPrevious()!;
            console.log(direction);
            if (direction < 0) {
                setVisible(true);
            } else {

                setVisible(false);

            }
        }
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "flex w-full fixed top-0 inset-x-0 mx-auto border border-transparent   bg-white bg-opacity-90  z-[5000] pr-2 pl-8 py-1  items-center justify-around space-x-4",
                    className
                )}
            >
                <div className="flex items-center space-x-4">
                    <a href="/" >
                    <img src="/EHLogo.jpeg" alt="logo" className="w-16 h-16" /></a>
                    </div>
                    <div className="flex space-x-4 gap-3">
                {navItems! && navItems.map((navItem: any, idx: number) => (
                    <Link
                        key={`link=${idx}`}
                        href={navItem.link}
                        className={cn(
                            "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                        )}
                    >
                        <span className="sm:hidden">{navItem.icon}</span> {/* Show icon on small screens only */}
                        <span className="hidden sm:block md:hidden lg:hidden">{navItem.name}</span> {/* Show name on medium and large screens */}
                        <span className="hidden md:flex lg:flex items-center space-x-2">
                            
                            <span>{navItem.name}</span>
                            {navItem.icon}
                        </span> {/* Show icon and name in a row on medium and large screens */}
                    </Link>
                ))}
                </div>
                <div className="flex min-w-16"/>

                
            </motion.div>
        </AnimatePresence>
    );
};
