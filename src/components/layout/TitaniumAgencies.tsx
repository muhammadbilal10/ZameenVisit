import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import AgencyCard from "../property/Agencies/AgencyCard";
import {
  getAgencies,
  getAllTitaniumAgencies,
} from "@/server-actions/Agency/agency";

export default async function TitaniumAgencies() {
  const data = await getAllTitaniumAgencies();
  const agencies = data?.agencies;

  return (
    <div className="">
      <h2 className="ml-4 mb-10 mt-10 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight">
        Titanium Agencies
      </h2>
      <Carousel className="ml-4 w-full relative">
        <CarouselContent className="-ml-1">
          {agencies?.map((agency: any, index: number) => (
            <CarouselItem
              key={index}
              className="pl-1 basis-full   md:basis-1/3 lg:basis-1/3 xl:basis-1/5"
            >
              <div className="p-1">
                <AgencyCard {...agency} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="">
          <CarouselPrevious className="left-4 h-10 w-10" />
          <CarouselNext className="right-4 h-10 w-10" />
        </div>
      </Carousel>
    </div>
  );
}
