"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const TAGS = [
  "NextJs",
  "Laravel",
  "Python",
  "MySql",
  "AI",
  "TailwindCss",
  "NestJs",
  "TypeScript",
  "Cloudinary",
  "FastApi",
  "Pinecone",
  "Angular",
   ".NET Core"
];
const PROJECTS = [
  {
    name: "Portfolio Website",
    image:
      "https://res.cloudinary.com/dspz1pktv/image/upload/v1751870461/porfolio.jpg",
    githubUrl: "https://github.com/HuyPoti/huy_porfolio",
    liveDemoUrl: "https://huy-porfolio.vercel.app/",
    desc: "Personal portfolio to introduce all about myself.",
    tags: ["NextJs", "TailwindCss", "Vercel"],
  },
  {
    name: "Viebook",
    image:
      "https://res.cloudinary.com/dspz1pktv/image/upload/v1751870635/viebook.jpg",
    githubUrl: "https://github.com/NguyenBaoHuy05/Viebook",
    liveDemoUrl: "",
    desc: "Mini Social Network for Vietnamese.",
    tags: ["NextJs", "Laravel", "TailwindCss", "MySql", "AI"],
  },
  {
    name: "Flex Style",
    image:
      "https://res.cloudinary.com/dspz1pktv/image/upload/v1780669443/aywwgjvnhncmqu1cptgh.png   ",
    githubUrl: "https://github.com/khangdepzaivodich/flex-style",
    liveDemoUrl: "",
    desc: "Online clothing store with modern and dynamic interface.",
    tags: ["NextJs", "TailwindCss", "TypeScript", "NestJs", "Cloudinary"],
  },
  {
    name: "LegalBot VN",
    image:
      "https://res.cloudinary.com/dspz1pktv/image/upload/v1780666230/yngu64n5shhtrimtqfan.png",
    githubUrl:
      "https://github.com/NguyenBaoHuy05/Legal-Consultation-Chatbot-VN",
    liveDemoUrl: "https://legal-vn.vercel.app/",
    desc: "AI Chatbot provide legal info in Viet Nam",
    tags: ["Python", "FastApi", "AI", "Pinecone"],
  },
  {
    name: "Software Architechture",
    image:
      "https://res.cloudinary.com/dspz1pktv/image/upload/v1780666982/q4cenqbdnuxa9htwwhwm.png",
    githubUrl: "https://github.com/HuyPoti/Software-architecture",
    liveDemoUrl: "https://huylamchovui.vercel.app/",
    desc: "Project for software architechture subject.",
    tags: ["Nextjs", "TailwindCss"],
  },
  {
    name: "Flash Ecommerce",
    image:
      "https://res.cloudinary.com/dspz1pktv/image/upload/v1780670752/eyu0ckwu6mbf8odv9xvd.png",
    githubUrl: "https://github.com/HuyPoti/CongNgheWeb",
    liveDemoUrl: "",
    desc: "Full-stack e-commerce platform for electronic components and accessories",
    tags: ["Angular", ".NET Core", "Cloudinary"],
  },
];

export default function ProjectList() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredProjects = selectedTag
    ? PROJECTS.filter((p) => p.tags.includes(selectedTag))
    : PROJECTS;

  return (
    <div className="flex flex-col items-center justify-center gap-10 px-6 py-10 font-[Parastoo] w-full">
      <h1 className="text-6xl md:text-7xl font-black text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 tracking-tight font-[Parastoo] drop-shadow-sm">
        Projects
      </h1>

      {/* Tag filter */}
      <div className="flex flex-wrap gap-3 mb-4 justify-center">
        {TAGS.map((tag) => (
          <Button
            key={tag}
            onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
            className={`
                px-5 py-2 rounded-full border border-white/20 transition-all duration-300 font-semibold cursor-pointer
                ${
                  selectedTag === tag
                    ? "bg-green-500 text-white shadow-lg shadow-green-500/30 scale-105"
                    : "bg-white/10 dark:bg-black/30 text-warning-foreground hover:bg-white/20"
                }`}
          >
            {tag}
          </Button>
        ))}
      </div>

      {/* Project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {filteredProjects.map((p) => (
          <Card
            key={p.name}
            className="bento-card bg-white/10 dark:bg-black/30 backdrop-blur-md rounded-3xl flex flex-col border border-white/20 dark:border-white/10 shadow-xl overflow-hidden w-full"
          >
            <CardContent className="flex flex-col overflow-hidden p-0 h-full">
              {/* Phần hình ảnh */}
              <div className="relative w-full aspect-video min-h-[220px]">
                <Image
                  src={p.image}
                  alt="Ảnh demo"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Phần thông tin */}
              <div className="flex-1 p-6 flex flex-col justify-between text-warning-foreground">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h2 className="text-3xl font-extrabold text-white">
                      {p.name}
                    </h2>
                    <div className="flex gap-1">
                      <Link href={p.githubUrl} target="_blank">
                        <Button className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-full px-6 py-2.5 text-sm font-bold shadow-md shadow-blue-500/20 cursor-pointer">
                          GitHub
                        </Button>
                      </Link>
                      <Link href={p.liveDemoUrl} target="_blank">
                        <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-2.5 text-sm font-bold shadow-md shadow-blue-500/20 cursor-pointer">
                          Live Demo
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <p className="opacity-85 text-lg mb-6 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 bg-white/10 dark:bg-white/5 rounded-full text-xs font-semibold border border-white/10 text-white/95"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        {filteredProjects.length === 0 && (
          <div className="col-span-full text-center text-gray-500 py-10">
            No project found.
          </div>
        )}
      </div>
    </div>
  );
}
