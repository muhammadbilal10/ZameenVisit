import React from "react";
import { Card, CardContent, CardHeader } from "../../ui/card";
import Image from "next/image";
import Link from "next/link";

export default function CitySearchCard({
  image,
  title,
  value,
}: {
  image: string;
  title: string;
  value: string;
}) {
  return (
    <Link href={`/advanced-search?city=${value}`}>
      <Card className="relative group cursor-pointer">
        <CardHeader className="absolute text-white transition group-hover:duration-150 ease-in-out  group-hover:text-[#252a2c] text-xl font-semibold  z-10">
          {title}
        </CardHeader>
        <CardContent className="p-0 h-[425px]">
          <Image
            src={image}
            alt="placeholder"
            height={400}
            width={500}
            className="w-full h-full rounded-md"
          />
        </CardContent>
      </Card>
    </Link>
  );
}
