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
import { CustomTooltip } from "@/components/common/CustomTooltip";
import Link from "next/link";

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
  function createPropertySlug() {
    const baseSlug = `${property.noOfBedrooms}-bedroom-${"apartment"}-${
      property.agentInfo.name
    }-${property.location}`;
    const id = property.id;

    const slug = baseSlug
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-]/g, "");
    return `/property/${slug}/${id}`;
  }

  return (
    <Link href={createPropertySlug()}>
      <Card className={cn("w-full")}>
        <CardContent className={cn("p-0")}>
          <Image
            src={property.image}
            alt={property.title}
            loading="lazy"
            height={149}
            width={700}
            className="w-full"
          />
        </CardContent>
        <CardHeader>
          <CardTitle className={cn("text-xl truncate")}>
            <CustomTooltip label={property.title}>
              <p className="truncate">{property.title}</p>
            </CustomTooltip>
          </CardTitle>
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
        <CardFooter className={cn("p-2 mt-auto")}>
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>{}</AvatarFallback>
            </Avatar>
            <p className="">{property.agentInfo.name}</p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PropertyCard;
