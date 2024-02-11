import { CustomeSelect } from "@/components/common/CustomeSelect";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { propertyCategories } from "@/constants";

export function PropertySearchCard() {
  return (
    <Card>
      <CardHeader>
        {/* <CardTitle>Account</CardTitle>
        <CardDescription>
          Make changes to your account here. Click save when you're done.
        </CardDescription> */}
      </CardHeader>
      <CardContent className="gap-3 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <CustomeSelect
            items={propertyCategories}
            placeholderVal="Select a Property Category "
            label="Property Category"
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="location">Location</Label>
          <CustomeSelect
            items={propertyCategories}
            placeholderVal="Select a Location"
            label="Property Location"
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="area">Area</Label>
          <CustomeSelect
            items={propertyCategories}
            placeholderVal="Select a Location"
            label="Property Location"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="max-sm:w-full w-[230px]">Search</Button>
      </CardFooter>
    </Card>
  );
}
