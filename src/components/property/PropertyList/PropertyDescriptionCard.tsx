import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PropertyDescriptionCard({
  description,
}: {
  description: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Description</CardTitle>
      </CardHeader>
      <Separator className="my-4" />
      <CardContent>
        <p className="font-light">{description}</p>
      </CardContent>
    </Card>
  );
}
