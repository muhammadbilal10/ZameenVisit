import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PropertyOverviewCard() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Overview</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <Separator className="my-4" />
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
