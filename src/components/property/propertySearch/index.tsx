import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PropertySearchCard } from "./PropertySearchCard";

export function PropertySearch() {
  return (
    <Tabs
      defaultValue="buy"
      className="w-3/4 mx-auto sm:w-1/2 -mt-32 z-30 relative"
    >
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="buy">Buy</TabsTrigger>
        <TabsTrigger value="rent">Rent</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
      </TabsList>
      <TabsContent value="buy">
        <PropertySearchCard />
      </TabsContent>
      <TabsContent value="rent">
        <PropertySearchCard />
      </TabsContent>
      <TabsContent value="projects">
        <PropertySearchCard />
      </TabsContent>
    </Tabs>
  );
}
