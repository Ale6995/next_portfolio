
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import { FaArrowUp, FaBriefcase, FaCode, FaEnvelope, FaHome, FaPhone, FaUser } from "react-icons/fa";
import { FaTemperatureArrowUp } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full gap-y-4">
        <FloatingNav navItems={[
          { name: 'About me', link: '#about', icon: <FaUser /> },
          { name: 'Projects', link: '#projects', icon: <FaCode /> },
          { name: 'Experience', link: '#experience', icon: <FaBriefcase /> },
          { name: 'Contact me', link: '#contact', icon: <FaEnvelope /> }
        ]} />
        <Hero></Hero>
        <Grid />
        <RecentProjects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
