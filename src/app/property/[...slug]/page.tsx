import { PropertyCarousel } from "@/components/common/Carousel";
import PropertyOverviewCard from "@/components/property/PropertyList/PropertyOverviewCard";
import PropertyVideoCard from "@/components/property/PropertyList/PropertyVideoCard";
import AgencyCard from "@/components/property/TitaniumAgencies/AgencyCard";
import AgentContactForm from "@/components/property/TitaniumAgencies/AgentContactForm";
import { MapPin } from "lucide-react";

async function getPropertyData(id: string) {
  console.log(id);

  return {
    id: id,
    title: "10 MARLa House For SALE WITH BASEMENT",
    location: "Bahria Town - Sector C, Bahria Town, Lahore, Punjab",
    description: "Property Description",
    price: 100000,
    address: "123 Main St, Anytown, USA",
    image:
      "https://demo17.houzez.co/wp-content/uploads/2020/04/006-1170x785.jpg",
  };
}

export default async function ProptertyDetailsPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const propertyId = params.slug[1];
  console.log(propertyId);
  const property = await getPropertyData(propertyId);

  return (
    <div className="max-w-7xl mx-auto px-4 mb-10">
      <div className="py-8">
        <div className="flex justify-between">
          <h2 className="md:text-3xl text-xl  font-normal uppercase">
            {property.title}
          </h2>
          <h2 className="md:text-3xl text-xl  font-bold">
            PKR {property.price}
          </h2>
        </div>
        <address className="flex items-center mt-2">
          <MapPin className="mr-1 w-4 h-4" />
          {property.address}
        </address>
      </div>
      <div className="grid grid-cols-12 gap-10">
        <div className="lg:col-span-8 col-span-12 space-y-8">
          <PropertyCarousel />
          <PropertyOverviewCard />
          <PropertyVideoCard />
        </div>

        <div className="lg:col-span-4 col-span-12">
          <div>
            <AgentContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
