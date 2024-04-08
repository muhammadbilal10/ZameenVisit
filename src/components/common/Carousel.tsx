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
    <Carousel>
      <CarouselContent>
        {Array.from({ length: backgroundImages.length }).map((_, index) => (
          <CarouselItem key={index} className="basis-full">
            <div className="p-1">
              <Card className="">
                <CardContent className="p-0">
                  <Image
                    src={backgroundImages[index]}
                    alt="Property Image"
                    width={1280}
                    height={600}
                    className="w-full object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-20" />
      <CarouselNext className="mr-20" />
    </Carousel>
  );
}
