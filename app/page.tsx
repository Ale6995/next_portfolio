"use client";
import Hero from "@/components/Hero";
import Services from "@/components/services";
import Team from "@/components/Team";
import { FloatingNav } from "@/components/ui/FloatingNav";
import WhyUs from "@/components/WhyUs";
import { navItems } from "@/data";
import {  FaBriefcase, FaCode, FaEnvelope, FaServicestack, FaUser, FaWrench } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-white flex justify-center items-center flex-col mx-auto overflow-clip">
      <div className=" w-full gap-y-4">
        <FloatingNav navItems= {navItems} />
        <Hero/>
        <WhyUs />
        <Services />
        <Team />
      </div>
    </main>
  );
}
