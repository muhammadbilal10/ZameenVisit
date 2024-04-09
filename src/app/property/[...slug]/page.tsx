import { PropertyCarousel } from "@/components/common/Carousel";
import PropertyOverviewCard from "@/components/property/PropertyList/PropertyOverviewCard";
import PropertyVideoCard from "@/components/property/PropertyList/PropertyVideoCard";
import AgencyCard from "@/components/property/TitaniumAgencies/AgencyCard";
import AgentContactForm from "@/components/property/TitaniumAgencies/AgentContactForm";
import { backgroundImages } from "@/constants";
import { Property } from "@/types/Property";
import { MapPin } from "lucide-react";

async function getPropertyData(id: string): Promise<Property> {
  console.log(id);

  return {
    id: id,
    title: "10 MARLa House For SALE WITH BASEMENT",
    purpose: "sale",
    location: {
      city: "Lahore",
      state: "Punjab",
      zipCode: "54000",
      address: "123 Main St, Anytown, USA",
    },
    bathrooms: 4,
    bedrooms: 10,
    areaSize: {
      size: 10,
      unit: "marla",
    },
    builtYear: 2021,
    description: "Property Description",
    price: 100000,
    features: ["3 Bedrooms", "2 Bathrooms", "1 Kitchen", "1 Lounge"],
    imageUrl: backgroundImages,
    propertyType: "Apartment",
    status: "for-sale",
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
        <div className="flex max-lg:flex-col justify-between space-y-2">
          <h2 className="md:text-3xl text-xl  font-normal uppercase">
            {property.title}
          </h2>
          <h2 className="lg:text-3xl text-xl  font-bold">
            PKR {property.price}
          </h2>
        </div>
        <address className="flex items-center mt-2">
          <MapPin className="mr-1 w-4 h-4" />
          {property.location.address}, {property.location.city}
        </address>
      </div>
      <div className="grid grid-cols-12 gap-4 md:gap-10">
        <div className="lg:col-span-8 col-span-12 space-y-8">
          <PropertyCarousel propertyImages={property.imageUrl} />
          <PropertyOverviewCard property={property} />
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
