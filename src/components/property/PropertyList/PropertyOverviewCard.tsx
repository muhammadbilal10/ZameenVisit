import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Property } from "@/types/Property";
import { Bath, BedSingle, Calendar, Home, Move3D } from "lucide-react";

export default function PropertyOverviewCard({
  property,
}: {
  property: Property;
}) {
  const overview = [
    {
      text: "Property Type",
      value: property?.propertyType,
    },
    {
      text: "Bedrooms",
      value: property?.bedrooms,
      icon: BedSingle,
    },
    {
      text: "Bathrooms",
      value: property?.bathrooms,
      icon: Bath,
    },
    {
      text: "Area size",
      value: property?.areaSize.size,
      icon: Move3D,
    },
    {
      text: "Year Built",
      value: property?.builtYear,
      icon: Calendar,
    },
    {
      text: "Updated on",
      value: "August 21, 2023",
    },
  ];
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <Separator className="my-4" />
      <CardContent className="grid grid-cols-12 gap-5">
        <div className="flex gap-8  flex-wrap col-span-12 md:col-span-8">
          {overview.map((item, index) => (
            <div key={index} className="md:basis-1/4 basis-1/3">
              <div className="flex items-center gap-2">
                {item.icon && (
                  <item.icon
                    className="w-6 h-6 text-gray-500"
                    strokeWidth={1.5}
                  />
                )}
                <span className="font-semibold">{item.value}</span>
              </div>
              <p className="text-gray-500">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="md:col-span-4 col-span-12">Map</div>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
}
