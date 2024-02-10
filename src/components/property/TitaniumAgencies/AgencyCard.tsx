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

interface AgencyProps {
  id: number;
  name: string;
  image: string;
  address: string;
  phone: string;
  email: string;
}

const AgencyCard: React.FC<AgencyProps> = ({
  id,
  name,
  image,
  address,
  phone,
  email,
}) => {
  return (
    <Card className="w-[220px]">
      <CardContent className={cn("p-0")}>
        <Image src={image} alt={name} loading="lazy" height={220} width={220} />
      </CardContent>
      <CardHeader>
        <CardTitle className={cn("text-lg")}>{name}</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default AgencyCard;
