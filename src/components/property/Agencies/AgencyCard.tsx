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
import Link from "next/link";

interface AgencyProps {
  id: number;
  agencyName: string;
  agencyImage: string;
  agencyAddress: string;
  phone: string;
  companyEmail: string;
  city: string;
}

const AgencyCard: React.FC<AgencyProps> = ({
  id,
  agencyName,
  agencyImage,
  agencyAddress,
  companyEmail,
  city,
}) => {
  return (
    <Link href={`/agents/${agencyName}/${id}`}>
      <Card className="group">
        <CardContent className={cn("p-0")}>
          <Image
            src={agencyImage}
            alt={agencyName}
            height={220}
            width={600}
            className="w-full h-52 bg-cover transform transition-all group-hover:scale-95 duration-300"
          />
        </CardContent>
        <CardHeader>
          <CardTitle className={cn("text-md truncate")}>{agencyName}</CardTitle>
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
    </Link>
  );
};

export default AgencyCard;
