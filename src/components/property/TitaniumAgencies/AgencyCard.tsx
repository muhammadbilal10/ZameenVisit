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
import {} from "@radix-ui/react-icons";
import { LocateIcon, Map } from "lucide-react";

interface AgencyProps {
  id: number;
  name: string;
  image: string;
  address: string;
  phone: string;
  email: string;
  city: string;
}

const AgencyCard: React.FC<AgencyProps> = ({
  id,
  name,
  image,
  address,
  phone,
  email,
  city,
}) => {
  return (
    <Card className="">
      <CardContent className={cn("p-0")}>
        <Image
          src={image}
          alt={name}
          loading="lazy"
          height={220}
          width={600}
          className="w-full"
        />
      </CardContent>
      <CardHeader>
        <CardTitle className={cn("text-lg")}>{name}</CardTitle>
        <CardDescription>
          <span className="flex items-center gap-1">
            <Map size={16} /> {city}
          </span>
        </CardDescription>
      </CardHeader>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
};

export default AgencyCard;
