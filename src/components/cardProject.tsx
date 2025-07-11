import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface CardProjectData {
  url: string
  name: string,
  content: string,
  technology: string
}

interface CardProjectProps {
  items: CardProjectData[]
}
export function CardProject({items} : CardProjectProps) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-4xl"
    >
      <CarouselContent>
        {items.map(({name, url, content, technology}) => (
          <CarouselItem key={name} className="basis-1/2 py-5 rounded-xl">
            <div>
              <Card className="border-0">
                <CardContent className="aspect-square h-full flex flex-col overflow-hidden p-0">
                  
                  {/* Phần hình ảnh: 80% */}
                  <div className="flex-[4] relative w-full">
                    <Image
                      src= {url}
                      alt="Ảnh demo"
                      fill
                      className="object-cover rounded-t-xl"
                    />
                  </div>

                  {/* Phần nút: 20% */}
                  <div className="flex-[1] flex items-center justify-center bg-black">
                    <div >
                      <Dialog key={name}>
                        <form>
                        <DialogTrigger asChild>
                            <Button className="flex gap-2 items-center bg-orange-500 hover:bg-orange-800">
                            <span className="text-base font-medium">{name}</span>
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                            <DialogTitle className="text-2xl font-bold text-green-500">{name}</DialogTitle>
                            <DialogDescription>{content}</DialogDescription>
                            </DialogHeader>
                            <DialogHeader>
                            <DialogTitle className="text-blue-800">{"Technology"}</DialogTitle>
                            <DialogDescription>{technology}</DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="outline">Đóng</Button>
                            </DialogClose>
                            </DialogFooter>
                        </DialogContent>
                        </form>
                    </Dialog>
                    </div>
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
  )
}
