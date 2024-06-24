"use client";
import { CitySearch } from "@/components/common/CitySearch";
import { LocationSearch } from "@/components/common/LocationSearch";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Search } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function AgencySearchCard() {
  const [city, setCity] = React.useState("Lahore");
  return (
    <Card>
      {/* <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader> */}
      <CardContent className="pt-4 flex max-sm:flex-col gap-4 items-center">
        <CitySearch city={city} setCity={setCity} />
        <CitySearch city={city} setCity={setCity} />
        <CitySearch city={city} setCity={setCity} />
        <Button asChild className="p-3 bg-primary rounded-full max-sm:w-full">
          <Link href={`/agents/${city}?page=1`}>
            <Search className="text-white h-5 w-5" />
            <span className="sm:hidden ml-2">Search</span>
          </Link>
        </Button>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
}
