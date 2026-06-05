import Aura from "@/components/aura";
import Information from "@/components/information";
import Technology from "@/components/technology";
import TimelineStudy from "@/components/timeline";
import Image from "next/image";
import {
  FaPython,
  FaReact,
  FaLaravel,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import {
  SiCplusplus,
  SiPhp,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiTypescript,
  SiFastapi,
  SiNestjs,
  SiAngular,
  SiDotnet, 
  SiPostgresql,
  SiGooglegemini,
  SiClaude
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { DiVisualstudio } from "react-icons/di";
import { CardProject } from "@/components/cardProject";
import ProjectList from "@/components/project-list";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import { ContactForm } from "@/components/form";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col items-center gap-20 py-10 w-full max-w-7xl mx-auto px-4 md:px-8">
      {/* Home Section */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center min-h-[50vh] text-warning-foreground w-full max-w-6xl"
      >
        <Aura />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-10">
          {/* Vietnamese Bento Card */}
          <div className="bento-card bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/10 p-10 rounded-3xl shadow-xl flex flex-col justify-center gap-6">
            <h1 className="text-4xl md:text-5xl italic font-black font-[Parastoo] text-center leading-relaxed text-white">
              &quot;Chỉ cần có cố gắng bạn đã thành công phân nửa rồi&quot; - Nguyễn Gia Huy
            </h1>
            <h2 className="text-3xl md:text-4xl font-black font-[Parastoo] text-center leading-relaxed mt-4">
              Mình là sinh viên năm 3 tại{" "}
              <span className="text-green-400 font-black underline decoration-4 decoration-green-400/30">HCM University of Education</span>,
              mục tiêu là{" "}
              <span className="text-cyan-400 font-black underline decoration-4 decoration-cyan-400/30">Fullstack Engineer</span>.
            </h2>
          </div>

          {/* English Bento Card */}
          <div className="bento-card bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/10 p-10 rounded-3xl shadow-xl flex flex-col justify-center gap-6">
            <h1 className="text-4xl md:text-5xl italic font-black font-[Parastoo] text-center leading-relaxed text-white">
              &quot;Just try and you are half way there.!&quot; - Nguyen Gia Huy
            </h1>
            <h2 className="text-3xl md:text-4xl font-black font-[Parastoo] text-center leading-relaxed mt-4">
              I am a 3rd year student at{" "}
              <span className="text-green-400 font-black underline decoration-4 decoration-green-400/30">HCM University of Education</span>,
              my goal is <span className="text-cyan-400 font-black underline decoration-4 decoration-cyan-400/30">Fullstack Engineer</span>.
            </h2>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="w-full max-w-6xl font-[Parastoo]"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
          {/* Card 1: Avatar & Personal Info */}
          <div className="bento-card md:col-span-4 bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/10 p-8 rounded-3xl shadow-xl flex flex-col gap-6">
            <div className="relative w-full h-[320px]">
              <Image
                src="https://res.cloudinary.com/dspz1pktv/image/upload/v1751616408/profile.jpg"
                alt="Ảnh đại diện"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Information title="Name" content="Nguyen Gia Huy" />
              <Information
                title="Address"
                content="Phuoc Hung 1 Hamlet, My Loc Commune, Tay Ninh Province"
              />
            </div>
          </div>

          {/* Right Side: Goals & Education */}
          <div className="md:col-span-8 flex flex-col gap-6">
            {/* Card 2: Goal */}
            <div className="bento-card bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/10 p-8 rounded-3xl shadow-xl flex flex-col justify-center">
              <Information
                title="Goal:"
                content="A software developer, application"
              />
            </div>

            {/* Card 3: Education & Timeline */}
            <div className="bento-card bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/10 p-8 rounded-3xl shadow-xl flex flex-col gap-6">
              <Information
                title="Education"
                content="Year 3 at HCM University of Education"
              />

              <div className="mt-2">
                <TimelineStudy
                  items={[
                    {
                      year: "2020 - 2023",
                      school: "Can Giuoc High School",
                      graduate: true,
                    },
                    {
                      year: "2023 - Now",
                      school: "HCM University of Education",
                      graduate: false,
                    },
                  ]}
                />
              </div>
            </div>
          </div>


          {/* Card 5: Programming Skills */}
          <div className="bento-card md:col-span-6 bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/10 p-8 rounded-3xl shadow-xl flex flex-col gap-6">
            <span className="text-2xl font-black text-cyan-400 uppercase tracking-wider">Programming</span>
            <Technology
              items={[
                {
                  icon: <FaPython className="text-[#3776AB]" />,
                  name: "Python",
                },
                {
                  icon: <TbBrandCSharp className="text-[#953cad]" />,
                  name: "C#",
                },
                {
                  icon: <SiCplusplus className="text-[#00599C]" />,
                  name: "C++",
                },
                {
                  icon: <IoLogoJavascript className="text-[#F7DF1E]" />,
                  name: "Javascript",
                },
                {
                  icon: <SiTypescript className="text-[#3178C6]" />,
                  name: "Typescript",
                },
                { icon: <SiPhp className="text-[#777BB4]" />, name: "Php" },
              ]}
            />
          </div>

          {/* Card 6: Framework Skills */}
          <div className="bento-card md:col-span-6 bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/10 p-8 rounded-3xl shadow-xl flex flex-col gap-6">
            <span className="text-2xl font-black text-yellow-500 uppercase tracking-wider">Framework</span>
            <Technology
              items={[
                {
                  icon: <FaReact className="text-[#61DAFB]" />,
                  name: "ReactJs",
                },
                {
                  icon: <RiNextjsFill className="text-[#000000] dark:text-white" />,
                  name: "NextJs",
                },
                {
                  icon: <FaLaravel className="text-[#FF2D20]" />,
                  name: "Laravel",
                },
                {
                  icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
                  name: "Tailwind",
                },
                {
                  icon: <FaNodeJs className="text-[#5FA04E]" />,
                  name: "NodeJs",
                },
                {
                  icon: <SiExpress className="text-[#000000] dark:text-white" />,
                  name: "ExpressJs",
                },
                {
                  icon: <SiNestjs className="text-[#000000] dark:text-white" />,
                  name: "NestJs",
                },
                {
                  icon: <SiAngular className="text-[#000000] dark:text-white" />,
                  name: "Angular",
                },
                {
                  icon: <SiDotnet className="text-[#000000] dark:text-white" />,
                  name: ".Net",
                },
                {
                  icon: <SiFastapi className="text-[#000000] dark:text-white" />,
                  name: "FastAPI",
                },
              ]}
            />
          </div>

          {/* Card 7: Database Skills */}
          <div className="bento-card md:col-span-4 bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/10 p-8 rounded-3xl shadow-xl flex flex-col gap-6">
            <span className="text-2xl font-black text-green-400 uppercase tracking-wider">Database</span>
            <Technology
              items={[
                {
                  icon: <SiMysql className="text-[#4479A1]" />,
                  name: "MySql",
                },
                {
                  icon: <SiMongodb className="text-[#47A248]" />,
                  name: "Mongodb",
                },
                {
                  icon: <SiPostgresql className="text-[#000000] dark:text-white" />,
                  name: "PostgreSQL",
                },
              ]}
            />
          </div>

          {/* Card 8: Tool Skills */}
          <div className="bento-card md:col-span-8 bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/10 p-8 rounded-3xl shadow-xl flex flex-col gap-6">
            <span className="text-2xl font-black text-orange-400 uppercase tracking-wider">Tool</span>
            <Technology
              items={[
                {
                  icon: <FaGithub className="text-[#181717] dark:text-white" />,
                  name: "Github",
                },
                {
                  icon: <VscVscode className="text-[#007ACC]" />,
                  name: "VsCode",
                },
                {
                  icon: <DiVisualstudio className="text-[#5C2D91]" />,
                  name: "VsStudio",
                },
                {
                  icon: <SiPostman className="text-[#FF6C37]" />,
                  name: "Postman",
                },
              ]}
            />
          </div>
          {/* Card 9: LLM Skills */}
          <div className="bento-card md:col-span-8 bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/10 p-8 rounded-3xl shadow-xl flex flex-col gap-6">
            <span className="text-2xl font-black text-orange-400 uppercase tracking-wider">LLM Tool</span>
            <Technology
              items={[
                {
                  icon: <SiGooglegemini  className="text-[#D277A9]" />,
                  name: "Gemini",
                },
                {
                  icon: <SiClaude className="text-[#D97757]" />,
                  name: "Claude",
                },
              ]}
            />
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full max-w-6xl">
        <ProjectList />
      </section>

      {/* Blog Section */}
      <section id="blog" className="w-full max-w-6xl py-10">
        <h1 className="text-6xl md:text-7xl font-black text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 tracking-tight font-[Parastoo] drop-shadow-sm">
          Blog cá nhân
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="bento-card bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/10 p-8 rounded-3xl shadow-xl flex flex-col justify-between text-warning-foreground"
            >
              <div>
                <p className="text-sm opacity-60 mb-2">{post.date}</p>
                <h3 className="text-3xl font-bold mb-3 leading-tight text-white">{post.title}</h3>
                <p className="opacity-80 text-lg mb-6 leading-relaxed">{post.summary}</p>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="text-cyan-600 dark:text-cyan-400 font-bold hover:underline inline-flex items-center gap-1 text-sm mt-auto"
              >
                Đọc tiếp →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-3xl py-10">
        <h1 className="text-6xl md:text-7xl font-black text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 tracking-tight font-[Parastoo] drop-shadow-sm">
          Contact
        </h1>
        <ContactForm />
      </section>
    </div>
  );
}
