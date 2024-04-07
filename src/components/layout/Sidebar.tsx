import { accountMenuItems } from "@/constants";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Sidebar() {
  return (
    <div>
      <div className="flex flex-col items-center gap-3 py-8 px-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h2 className="text-sm font-semibold">Welcome back Shad Mirza</h2>
      </div>
      <div className="flex flex-col items-start">
        {accountMenuItems.map((item, index) => (
          <Button key={index} variant="ghost" className="">
            <Link href={item.href} className="">
              <span className="flex gap-3">
                {item.icon}
                {item.name}
              </span>
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
