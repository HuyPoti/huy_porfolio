import Information from "@/components/information";
import Technology from "@/components/technology";
import TimelineStudy from "@/components/timeline";
import Image from "next/image";
import { FaPython, FaReact, FaLaravel, FaNodeJs, FaGithub } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { SiCplusplus, SiPhp, SiExpress, SiMysql, SiMongodb, SiPostman } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { DiVisualstudio } from "react-icons/di";
import { CardProject } from "@/components/cardProject";

export default function About() {
    return (
        <div className="flex flex-row items-start justify-center min-h-[70vh] gap-10 px-6 py-10 font-[Parastoo]">
        {/* Ảnh đại diện */}
            <div className="flex-shrink-0 max-w-[25vw]">
                <div className="relative w-full h-100 mb-5">
                    <Image
                        src="https://res.cloudinary.com/dspz1pktv/image/upload/v1751616408/profile.jpg"
                        alt="Ảnh demo"
                        fill
                        className="object-cover rounded-xl"
                    />
                </div>
                {/* <Image
                    src="https://res.cloudinary.com/dspz1pktv/image/upload/v1751616408/profile.jpg"
                    alt="Profile"
                    fill
                /> */}
                <Information title="Name" content="Nguyen Gia Huy" />
                <Information title="Address" content="Phuoc Hung 1 Hamlet, My Loc Commune, Tay Ninh Province" />
            </div>
            {/* Thông tin */}
            <div className="flex-1 flex flex-col w-full max-w-2xl">
                {/* Goal */}
                <Information title="Goal:" content="A software developer, application" />
                <span className="border-t border-white/80 my-5"></span>
                {/* Education */}
                <Information title="Education" content="Year 3 at HCM University of Education" />
                <TimelineStudy
                    items={[
                        { year: "2020 - 2023", school: "Can Giuoc High School", graduate: true },
                        { year: "2023 - 2025", school: "HCM University of Education", graduate: false },
                    ]}
                />
                <span className="border-t border-white/80 my-5"></span>
                {/* Skill */}
                <Information title="Skills" content="Developing yourself with soft and technology skills" />
                <div className="flex flex-col ap-10 justify-around text-2xl font-bold">
                    <div><span className="text-blue-800">Programing</span>
                        <Technology
                            items={[
                                { icon: <FaPython className="text-[#3776AB]"/>, name: "Python" },
                                { icon: <TbBrandCSharp className="text-[#953cad]"/>, name: "C#"  },
                                { icon: <SiCplusplus className="text-[#00599C]"/>, name: "C++"  },
                                { icon: <IoLogoJavascript className="text-[#F7DF1E]"/>, name: "Javascript"  },
                                { icon: <SiPhp className="text-[#777BB4]"/>, name: "Php"  },
                            ]}
                        />
                    </div>
                    <div><span className="text-yellow-800">Framework</span>
                        <Technology
                            items={[
                                { icon: <FaReact className="text-[#61DAFB]"/>, name: "ReactJs" },
                                { icon: <RiNextjsFill className="text-[#000000]"/>, name: "NextJs"  },
                                { icon: <FaLaravel className="text-[#FF2D20]"/>, name: "Laravel"  },
                                { icon: <RiTailwindCssFill className="text-[#06B6D4]"/>, name: "Tailwind"  },
                                { icon: <FaNodeJs className="text-[#5FA04E]"/>, name: "NodeJs"  },
                                { icon: <SiExpress className="text-[#000000]"/>, name: "ExpressJs"  },
                            ]}
                        />
                    </div>
                    <div><span className="text-green-800">Database</span>
                        <Technology
                            items={[
                                { icon: <SiMysql className="text-[#4479A1]"/>, name: "MySql" },
                                { icon: <SiMongodb className="text-[#47A248]"/>, name: "Mongodb"  },                                
                            ]}
                        />
                    </div>
                    <div><span className="text-orange-800">Tool</span>
                        <Technology
                            items={[
                                { icon: <FaGithub className="text-[#181717]"/>, name: "Github" },
                                { icon: <VscVscode className="text-[#007ACC]"/>, name: "VsCode"  },
                                { icon: <DiVisualstudio className="text-[#5C2D91]"/>, name: "VsStudio"  },
                                { icon: <SiPostman className="text-[#FF6C37]"/>, name: "Postman"  },
                            ]}
                        />
                    </div>
                </div>
                <span className="border-t border-white/80 my-5"></span>
                {/* Goal (again) */}
                <Information title="Projects" content="Group and individual projects from 2023" />
                <div className="w-full ">
                    <CardProject
                    items={[
                        { url: "https://res.cloudinary.com/dspz1pktv/image/upload/v1751870461/porfolio.jpg", name: "Porfolio", content: "Personal portfolio to introduce all about myself", technology: "NextJs, TailwindCss, Vercel"},
                        { url: "https://res.cloudinary.com/dspz1pktv/image/upload/v1751870635/viebook.jpg", name: "Viebook", content: "Mini Social Network for Vietnamese", technology: "Laravel, NextJs, AI, TailwindCss"},
                        { url: "https://res.cloudinary.com/dspz1pktv/image/upload/v1751870561/droneAI.jpg", name: "DroneAI", content: "Drone simulation works on 2D model using heuritics", technology: "Python, Pygame"},
                        { url: "https://res.cloudinary.com/dspz1pktv/image/upload/v1751870520/hunter.jpg", name: "Hunter", content: "2D survival game with interesting experience", technology: "Python, Pygame, Pytmx"},
                    ]}/>
                </div>
                
            </div>
        </div>
    );
}