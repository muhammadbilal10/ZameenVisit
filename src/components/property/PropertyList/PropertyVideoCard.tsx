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
  function convertToEmbedUrl(url: string): string {
    // Regular expression to match various YouTube URL formats
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
      // If we have a match and the video ID is 11 characters long (standard YouTube video ID length)
      return `https://www.youtube.com/embed/${match[2]}`;
    } else {
      // If no valid YouTube video ID is found, throw an error
      throw new Error("Invalid YouTube URL");
    }
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
