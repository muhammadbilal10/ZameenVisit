import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function MapContactCard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>How To Find Us</CardTitle>
        {/* <CardDescription>hello</CardDescription> */}
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <p className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span className="">123, Street Name, City Name, Country Name</span>
          </p>
          <p className="flex items-center space-x-2">
            <Phone className="h-4 w-4" /> <span>+92 349 441 1115</span>
          </p>
          <p className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />{" "}
            <span>
              <Link href="mailto:zameenvisit@gmail.com">
                zameenvisit@gmail.com
              </Link>
            </span>
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-semibold mt-4">Opening Hours</h1>
          <p className="text-gray-600 mt-2">
            Monday - Friday: 9:00 AM - 6:00 PM
          </p>
          <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
          <p className="text-gray-600">Sunday: Closed</p>
        </div>
      </CardContent>
    </Card>
  );
}
