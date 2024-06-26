
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import { FaArrowUp, FaBriefcase, FaHome, FaUser } from "react-icons/fa";
import { FaTemperatureArrowUp } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full gap-y-4">
        <FloatingNav  navItems={[
          {name:'About me',link:'#about',icon:<FaUser/>},
          {name:'Projects',link:'#projects',icon:<FaBriefcase/>},
          {name:'Go Up',link:'/',icon:<FaArrowUp/>}
          ]} />
        <Hero></Hero>
        <Grid/>
        <RecentProjects/>
          </div> 
    </main>
  );
}
