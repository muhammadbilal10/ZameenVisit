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

export function PropertySearch({ searchActions }: { searchActions?: any }) {
  return (
    <Tabs defaultValue="buy">
      <TabsList
        className="grid w-full max-w-lg grid-cols-2 mx-auto"
        defaultValue={searchActions?.searchType}
      >
        <TabsTrigger value="buy">Buy</TabsTrigger>
        <TabsTrigger value="rent">Rent</TabsTrigger>
        {/* <TabsTrigger value="projects">Projects</TabsTrigger> */}
      </TabsList>
      <TabsContent value="buy">
        <PropertySearchCard searchType={"buy"} searchActions={searchActions} />
      </TabsContent>
      <TabsContent value="rent">
        <PropertySearchCard searchType={"rent"} searchActions={searchActions} />
      </TabsContent>
      {/* <TabsContent value="projects">
        <PropertySearchCard
          searchType={"projects"}
          searchActions={searchActions}
        />
      </TabsContent> */}
    </Tabs>
  );
}
