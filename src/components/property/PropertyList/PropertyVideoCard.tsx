import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PropertyVideoCard() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Property Video</CardTitle>
      </CardHeader>
      <Separator className="my-4" />
      <CardContent>
        {/* <iframe
          src="https://www.youtube.com/watch?v=gfU1iZnjRZM"
          frameborder="0"
          allowfullscreen
        /> */}
        <iframe
          width="100%"
          height="417"
          src="https://www.youtube.com/embed/uTIcquf4Z-s"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-md"
        ></iframe>
      </CardContent>
    </Card>
  );
}
