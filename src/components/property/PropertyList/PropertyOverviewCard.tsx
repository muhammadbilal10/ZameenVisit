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

export default function PropertyOverviewCard({
  property,
}: {
  property: Property;
}) {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <Separator className="my-4" />
      <CardContent>
        <div className="flex gap-4">
          <div className="flex">
            {property.features.map((feature, index) => (
              <div key={index}>
                <span>{feature}</span>
                <p>Property Type</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
