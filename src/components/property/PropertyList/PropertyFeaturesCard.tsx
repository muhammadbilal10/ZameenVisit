import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function PropertyFeaturesCard({ features }: { features: any }) {
  console.log(features);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Features</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="">
          {features?.map((feature: any, index: number) => (
            <div key={index}>
              <h3 className=" font-semibold my-4">{feature?.title}</h3>
              <ul className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
                {feature?.items?.map((item: any, idx: number) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="text-[#26759b] w-4 h-4 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
