import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function ToolHeaderCard({
  title,
  image,
  description,
  className,
}: {
  title: string;
  description: string;
  image: string;
  className?: string;
}) {
  return (
    <header className={cn("relative bg-cover bg-center h-96", className)}>
      <Image
        src={image}
        alt={title}
        height={400}
        width={400}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#282C1C] opacity-50"></div>
      <div className="absolute top-0 container mx-auto h-full flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-xl mt-2 max-w-2xl">{description}</p>
      </div>
    </header>
  );
}
