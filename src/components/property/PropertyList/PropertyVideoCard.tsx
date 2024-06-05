import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PropertyVideoCard({
  videoUrl,
}: {
  videoUrl: string[];
}) {
  function convertToEmbedUrl(url: string) {
    const videoId = url.split("v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Property Video</CardTitle>
      </CardHeader>
      <Separator className="my-4" />
      <CardContent>
        <iframe
          width="100%"
          height="417"
          src={
            videoUrl?.length > 0
              ? convertToEmbedUrl(videoUrl[0])
              : "https://www.youtube.com/embed/gfU1iZnjRZM"
          }
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
