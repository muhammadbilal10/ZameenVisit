import { PropertySearchCard } from "@/components/property/propertySearch/PropertySearchCard";
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
import { ContactPropertySearchCard } from "./ContactPropertySearchCard";

export default function ContactPropertySearch() {
  return (
    <Tabs defaultValue="buy">
      <TabsList
        className="grid w-full max-w-lg grid-cols-2 mx-auto"
        defaultValue={"buy"}
      >
        <TabsTrigger value="buy">Buy</TabsTrigger>
        <TabsTrigger value="rent">Rent</TabsTrigger>
      </TabsList>
      <TabsContent value="buy">
        <ContactPropertySearchCard searchType={"buy"} />
      </TabsContent>
      <TabsContent value="rent">
        <ContactPropertySearchCard searchType={"rent"} />
      </TabsContent>
    </Tabs>
  );
}
