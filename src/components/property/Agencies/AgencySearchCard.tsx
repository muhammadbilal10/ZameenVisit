"use client";
import { AgenciesByCitySearch } from "@/components/common/AgenciesByCitySearch";
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
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function AgencySearchCard() {
  const [city, setCity] = React.useState("");
  const [location, setLocation] = React.useState("");
  return (
    <Card className="max-w-3xl mx-auto">
      {/* <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader> */}
      <CardContent className="pt-4 grid grid-cols-5 gap-4">
        <div className="space-y-1 col-span-2">
          <Label htmlFor="city">City</Label>
          <CitySearch city={city} setCity={setCity} />
        </div>
        <div className="space-y-1 col-span-2">
          <Label htmlFor="city">Agencies Location</Label>
          <AgenciesByCitySearch
            city={city}
            location={location}
            setLocation={setLocation}
          />
        </div>

        <div className="mt-7 col-span-1 flex justify-center">
          <Button
            asChild
            className="p-3 bg-primary max-w-md rounded-full max-sm:w-full"
          >
            <Link href={`/agents/${city}?page=1`}>
              <Search className="text-white h-5 w-5" />
              <span className="sm:hidden ml-2">Search</span>
            </Link>
          </Button>
        </div>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
}
