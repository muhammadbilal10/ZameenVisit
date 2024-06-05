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

export function PropertyCarousel({
  propertyImages,
}: {
  propertyImages: string[];
}) {
  console.log(propertyImages);
  return (
    <Carousel>
      <CarouselContent>
        {propertyImages?.map((imageUrl, index) => (
          <CarouselItem key={index} className="basis-full">
            <div className="p-1">
              <Card className="">
                <CardContent className="p-0 relative h-[400px]">
                  <Image
                    src={imageUrl}
                    alt="Property Image"
                    width={1280}
                    height={600}
                    className="object-cover w-full h-full rounded-lg"
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
