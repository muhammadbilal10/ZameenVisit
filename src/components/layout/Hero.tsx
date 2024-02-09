import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Hero = () => {
  return (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9}>
        <Carousel className="w-full max-w-xl mx-auto">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="bg-green-500">
                <div className="p-1">
                  <Card className="">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image
                        src="/images/zameenVisit2.png"
                        height={500}
                        width={500}
                        alt="Hero"
                      />
                      {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </AspectRatio>
    </div>
  );
};

export default Hero;
