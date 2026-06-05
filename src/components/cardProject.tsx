"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface CardProjectData {
  url: string;
  name: string;
  content: string;
  technology: string;
}

interface CardProjectProps {
  items: CardProjectData[];
}
export function CardProject({ items }: CardProjectProps) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-4xl"
    >
      <CarouselContent>
        {items.map(({ name, url, content, technology }) => (
          <CarouselItem key={name} className="basis-1/2 py-5 px-3">
            <div>
              <Card className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all duration-300">
                <CardContent className="aspect-square flex flex-col p-0">
                  {/* Image: 75% */}
                  <div className="flex-[3] relative w-full">
                    <Image
                      src={url}
                      alt="Ảnh demo"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Info & Action Footer: 25% */}
                  <div className="flex-[1] flex items-center justify-between px-6 py-4 bg-black/40 border-t border-white/10 backdrop-blur-md">
                    <span className="text-lg font-bold text-white truncate max-w-[60%]">{name}</span>
                    <Dialog key={name}>
                      <form onSubmit={(e) => e.preventDefault()}>
                        <DialogTrigger asChild>
                          <Button className="flex gap-2 items-center bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-2 font-bold cursor-pointer text-sm">
                            Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] bg-slate-950 border border-white/10 text-white rounded-3xl backdrop-blur-xl">
                          <DialogHeader className="gap-2">
                            <DialogTitle className="text-2xl font-bold text-green-400">
                              {name}
                            </DialogTitle>
                            <DialogDescription className="text-white/70 text-base leading-relaxed">
                              {content}
                            </DialogDescription>
                          </DialogHeader>
                          <DialogHeader className="gap-1 mt-2">
                            <DialogTitle className="text-lg font-bold text-cyan-400">
                              Technology
                            </DialogTitle>
                            <DialogDescription className="text-white/80 text-sm">
                              {technology}
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter className="mt-4">
                            <DialogClose asChild>
                              <Button variant="outline" className="bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20 rounded-xl cursor-pointer">Đóng</Button>
                            </DialogClose>
                          </DialogFooter>
                        </DialogContent>
                      </form>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
