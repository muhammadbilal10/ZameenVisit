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
import { backgroundImages } from "@/constants";

export function PropertyCarousel() {
  return (
    <div className="">
      <Carousel className="w-full max-w-3xl  mx-auto ">
        <CarouselContent className="">
          {Array.from({ length: backgroundImages.length }).map((_, index) => (
            <CarouselItem key={index} className="basis-full ">
              <div className="p-1">
                <Card className="">
                  <CardContent className="p-0">
                    <Image
                      src={backgroundImages[index]}
                      alt="Property Image"
                      width={600}
                      height={486}
                      className="w-full object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
