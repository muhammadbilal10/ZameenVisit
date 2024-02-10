import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import AgencyCard from "./AgencyCard";

interface TitaniumAgency {
  id: number;
  name: string;
  image: string;
  address: string;
  phone: string;
  email: string;
}

interface TitaniumAgenciesProps {
  titaniumAgencies: TitaniumAgency[];
}

const TitaniumAgencies: React.FC<TitaniumAgenciesProps> = ({
  titaniumAgencies,
}) => {
  return (
    <div>
      <h2 className="ml-4 mb-10 mt-10 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight">
        Titanium Agencies
      </h2>
      <Carousel className="w-full sm:mx-20 mx-auto max-w-60 sm:max-w-screen-sm md:max-w-screen-lg lg:max-w-screen-xl flex items-center justify-center">
        <CarouselContent className="-ml-1">
          {titaniumAgencies.map((agency, index) => (
            <CarouselItem
              key={index}
              className="pl-1 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <div className="p-1">
                <AgencyCard {...agency} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default TitaniumAgencies;
