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
import { formatCurrency, formatNumber } from "@/constants";

interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    description: string;
    price: string;
    imageUrl: string[];
    location: string;
    bedrooms: number;
    bathrooms: number;
    areaSize: {
      size: number;
      unit: string;
    };
    agentInfo: {
      name: string;
      phone: string;
      email: string;
    };
  };
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  function createPropertySlug() {
    const baseSlug = `${property.bedrooms}-bedroom-${"apartment"}-${
      property.agentInfo?.name
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
        <CardContent className={cn("p-0 h-52 w-full relative")}>
          {property?.imageUrl?.length > 0 && (
            <Image
              src={property.imageUrl[0]}
              alt="Property Image"
              width={600}
              height={200}
              className="object-cover w-full h-full"
            />
          )}
        </CardContent>
        <CardHeader>
          <CardTitle className={cn("text-xl truncate")}>
            <CustomTooltip label={property.title}>
              <p className="truncate">{property.title}</p>
            </CustomTooltip>
          </CardTitle>
          <p className="text-md font-semibold text-primary">
            PKR {formatCurrency(Number(property.price))}
          </p>
          <CardDescription className="line-clamp-3">
            {property.description}
          </CardDescription>
          <div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-1">
                <Bed size={16} /> {property.bedrooms}
              </span>
              <span className="flex items-center gap-1">
                <Bath size={16} /> {property?.bedrooms}
              </span>
              <span className="flex items-center gap-1">
                <AreaChart size={16} /> {property?.areaSize?.size}{" "}
                {property?.areaSize?.unit}
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
            <p className="">{property?.agentInfo?.name}</p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PropertyCard;
