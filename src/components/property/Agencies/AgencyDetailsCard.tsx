import { Mail, Map, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function AgencyDetailsCard({
  agencyImage,
  agencyName,
  companyEmail,
  agencyAddress,
}: {
  agencyImage: string;
  agencyName: string;
  companyEmail: string;
  agencyAddress: string;
}) {
  return (
    <div className="relative">
      <div className="flex gap-4">
        <Image
          src={agencyImage}
          alt="agency"
          width={200}
          height={200}
          className="w-72 h-72 object-cover rounded-lg"
        />
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">{agencyName}</h1>
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
