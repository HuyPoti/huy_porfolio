"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const TAGS = [
    "NextJs", "Laravel", "Python", "MySql", "AI", "TailwindCss"
];
const PROJECTS= [
    {
        name: "Portfolio Website",
        image: "https://res.cloudinary.com/dspz1pktv/image/upload/v1751870461/porfolio.jpg",
        url: "https://github.com/HuyPoti/huy_porfolio",
        desc: "Personal portfolio to introduce all about myself.",
        tags: ["NextJs", "TailwindCss", "Vercel"],
    },
    {
        name: "Viebook",
        image: "https://res.cloudinary.com/dspz1pktv/image/upload/v1751870635/viebook.jpg",
        url: "https://github.com/NguyenBaoHuy05/Viebook",
        desc: "Mini Social Network for Vietnamese.",
        tags: ["NextJs", "Laravel", "TailwindCss", "MySql","AI"],
    },
    {
        name: "Hunter",
        image: "https://res.cloudinary.com/dspz1pktv/image/upload/v1751870520/hunter.jpg",
        url: "https://github.com/HuyPoti/Hunter",
        desc: "2D survival game with interesting experience",
        tags: ["Python"],
    },
    {
        name: "DroneAI",
        image: "https://res.cloudinary.com/dspz1pktv/image/upload/v1751870561/droneAI.jpg",
        url: "https://github.com/HuyPoti/Drone_Astar",
        desc: "Drone simulation works on 2D model using heuritics",
        tags: ["Python"],
    },
]
export default function Project(){
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const filteredProjects = selectedTag ? PROJECTS.filter(p => p.tags.includes(selectedTag)) : PROJECTS;
    return(
        // <div className="flex flex-row items-start justify-center min-h-[70vh] gap-10 px-6 py-10 font-[Parastoo]">
        //     <h1 className="text-5xl font-bold">My Project</h1>
        // </div>
        <div className="flex flex-col items-center justify-center min-h-[70vh] gap-10 px-6 py-10 font-[Parastoo]">
        <h1 className="text-5xl font-bold">Projects</h1>
        {/* Tag filter */}
        <div className="flex flex-wrap gap-3 mb-8">
            {TAGS.map(tag => (
            <Button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                // px-4 py-1 rounded-full text-base font-medium border transition
                className={`
                ${selectedTag === tag ? "bg-green-500 text-white" : "bg-gray-100 text-black"}`}
            >
                {tag}
            </Button>
            ))}
        </div>
        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map(p => (
                <Card key={p.name} className="w-[25vw] bg-white rounded-2xl flex flex-col border-0">
                    <CardContent className="aspect-square h-full flex flex-col overflow-hidden p-0">
                    
                    {/* Phần hình ảnh: 80% */}
                    <div className="flex-[1] relative w-full">
                        <Image
                        src= {p.image}
                        alt="Ảnh demo"
                        fill
                        className="object-cover rounded-t-xl"
                        />
                    </div>

                    {/* Phần nút: 20% */}
                    <div key={p.name} className="bg-white text-black rounded-xl p-5 flex flex-col">
                        <div className="flex gap-2">
                            <h2 className="text-2xl font-bold">{p.name}</h2>
                            <Link href={p.url} target="_blank">
                                <Button variant="link" className="bg-blue-500 text-lg font-bold">
                                View
                                </Button>
                            </Link>
                        </div>
                        <p className="text-gray-700 mb-4">{p.desc}</p>
                        <div className="flex flex-wrap gap-2">
                            {p.tags.map(tag => (
                                <span key={tag} className="p-3 py-1 bg-gray-100 rounded-full text-sm">{tag}</span>
                            ))}
                        </div>
                    </div>
                    

                    </CardContent>
                </Card>
            
            ))}
            {filteredProjects.length === 0 && (
            <div className="col-span-full text-center text-gray-500">No project found.</div>
            )}
        </div>
        </div>
    );
}