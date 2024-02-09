import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AreaChart, Bath, Bed } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    description: string;
    price: string;
    image: string;
    location: string;
    noOfBedrooms: number;
    noOfBathrooms: number;
    area: string;
    agentInfo: {
      name: string;
      phone: string;
      email: string;
    };
  };
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Card className={cn("w-full")}>
      <CardContent className={cn("p-0")}>
        <Image
          src={property.image}
          alt={property.title}
          loading="lazy"
          height={700}
          width={700}
        />
      </CardContent>
      <CardHeader>
        <CardTitle className={cn("text-xl")}>{property.title}</CardTitle>
        <p className="text-md font-semibold text-primary">{property.price}</p>
        <CardDescription>{property.description}</CardDescription>
        <div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="flex items-center gap-1">
              <Bed size={16} /> {property.noOfBedrooms}
            </span>
            <span className="flex items-center gap-1">
              <Bath size={16} /> {property.noOfBathrooms}
            </span>
            <span className="flex items-center gap-1">
              <AreaChart size={16} /> {property.area}
            </span>
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardFooter className={cn("p-2")}>
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>{}</AvatarFallback>
          </Avatar>
          <p className="">{property.agentInfo.name}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
