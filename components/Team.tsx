import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { cn } from "@/utils/cn";
import { TeamMember } from "./ui/TeamMember";
import { teamMembers } from "@/data";

const Team = () => {
    return (
        <div className={`pb-0 mb-15 pt-26 bg-beige-100`} id="team">
            <div className="flex flex-col items-center relative pt-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h1 className="heading text-6xl md:text-6xl text-black">
                        Our <span className="text-black">Team</span>
                    </h1>
                    <TextGenerateEffect
                        words="The one who helps you meet your goals"
                        className="text-center text-[30px] md:text-4xl lg:text-4xl"
                    />
                </div>

                {/* <div className="flex items-end justify-center min-h-[380px] w-full">
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
                            "flex items-center justify-center w-full bg-beige"
                        )}
                    />
                </div> */}

                {/* Container for Team Members */}
                <div className="relative w-full flex flex-col items-center gap-10 mt-2">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-0 w-full">
                        {teamMembers.map((team, index) => (
                            <div key={team.id} className="relative w-full">
                                <div className="absolute bottom-[90px] inset-x-0 bg-beige h-1/2"></div>
                                <div className="relative z-10 p-4">
                                    <TeamMember img={team.img} name={team.name} />
                                </div>
                                {/* <div className="absolute bottom-0 inset-0 bg-beige h-1/2"></div> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
