import { PropertyCarousel } from "@/components/common/Carousel";
import ShareDropdown from "@/components/common/ShareDropdown";
import PropertyDescriptionCard from "@/components/property/PropertyList/PropertyDescriptionCard";
import PropertyFeaturesCard from "@/components/property/PropertyList/PropertyFeaturesCard";
import PropertyOverviewCard from "@/components/property/PropertyList/PropertyOverviewCard";
import PropertyVideoCard from "@/components/property/PropertyList/PropertyVideoCard";
import AgencyCard from "@/components/property/Agencies/AgencyCard";
import AgentContactForm from "@/components/property/Agencies/AgentContactForm";
import { Button } from "@/components/ui/button";
import { backgroundImages, formatNumber, shareMenuItems } from "@/constants";
import { getPropertyById } from "@/server-actions/property/property";
import { Property } from "@/types/Property";

import { Value } from "@radix-ui/react-select";
import { MapPin, Printer, Share, Share2 } from "lucide-react";

async function getPropertyData(id: string): Promise<Property> {
  console.log(id);
  const res = await getPropertyById(id);
  console.log(res?.property);
  return res?.property;
}

export default async function PropertyDetailsPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const propertyId = params.slug[1];
  const property = await getPropertyData(propertyId);

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 mb-10">
      <div className="py-8">
        <div className="flex max-lg:flex-col justify-between space-y-2">
          <h2 className="md:text-3xl text-xl  font-normal uppercase">
            {property?.title}
          </h2>
          <h2 className="lg:text-2xl text-xl font-bold">
            PKR {property?.price && formatNumber(property?.price.toString())}
          </h2>
        </div>
        <div className="flex justify-between">
          <address className="flex items-center mt-2">
            <MapPin className="mr-1 w-4 h-4" />
            {property?.location.address}
          </address>
          <div className="flex items-center gap-2 mt-2">
            <ShareDropdown
              Icon={Share2}
              text={"Share"}
              menuItems={shareMenuItems}
            />
            <Button className="h-8 rounded-lg text-xs">
              <Printer className="mr-2 w-3 h-3 font-bold" />
              Print
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 md:gap-10">
        <div className="lg:col-span-8 col-span-12 space-y-8">
          <PropertyCarousel propertyImages={property?.imageUrl} />
          <PropertyOverviewCard property={property} />
          <PropertyDescriptionCard description={property?.description} />
          <PropertyFeaturesCard features={property?.features} />
          <PropertyVideoCard videoUrl={property?.videoUrl} />
        </div>

        <div className="lg:col-span-4 col-span-12">
          <div>
            <AgentContactForm
              agentName={property?.user?.name}
              agentEmail={property?.user?.email}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
