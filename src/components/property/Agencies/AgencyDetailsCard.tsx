import { Mail, Map, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function AgencyDetailsCard({
  agencyImage,
  agencyName,
  companyEmail,
  agencyAddress,
  category,
}: {
  agencyImage: string;
  agencyName: string;
  companyEmail: string;
  agencyAddress: string;
  category: string;
}) {
  return (
    <div className="relative bg-muted rounded-xl p-4">
      <div className="flex max-sm:flex-col gap-4">
        <Image
          src={agencyImage}
          alt="agency"
          width={200}
          height={200}
          className="sm:w-28 w-full h-28 object-cover rounded-lg"
        />
        <div className="space-y-2">
          <div className="flex max-sm:flex-col sm:items-center gap-4">
            <h1 className="text-2xl font-semibold">{agencyName}</h1>
            <span className="bg-primary max-w-28 text-white text-sm px-2 text-center p-1 rounded-md  uppercase">
              {category}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>{companyEmail}</span>
          </div>
          <div className="flex space-x-2 items-center">
            <MapPin className="w-4 h-4" />
            <span>{agencyAddress}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
