import { PropertyCarousel } from "@/components/common/Carousel";
import ShareDropdown from "@/components/common/ShareDropdown";
import PropertyDescriptionCard from "@/components/property/PropertyList/PropertyDescriptionCard";
import PropertyOverviewCard from "@/components/property/PropertyList/PropertyOverviewCard";
import PropertyVideoCard from "@/components/property/PropertyList/PropertyVideoCard";
import AgencyCard from "@/components/property/TitaniumAgencies/AgencyCard";
import AgentContactForm from "@/components/property/TitaniumAgencies/AgentContactForm";
import { Button } from "@/components/ui/button";
import { backgroundImages, shareMenuItems } from "@/constants";
import { Property } from "@/types/Property";
import { Value } from "@radix-ui/react-select";
import { MapPin, Printer, Share, Share2 } from "lucide-react";

async function getPropertyData(id: string): Promise<Property> {
  console.log(id);
  //TODO: Replace this with actual API call
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
    description:
      "This spacious 10 marla house with a basement is perfect for a growing family. It features 10 bedrooms, 4 bathrooms, a kitchen, and a lounge. The house is located in the heart of Lahore, Punjab, and offers easy access to all amenities. The modern design and high-quality construction make it an ideal choice for those looking for a comfortable and luxurious living space. Don't miss out on this opportunity to own your dream home! anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",
    price: 100000,
    features: ["3 Bedrooms", "2 Bathrooms", "1 Kitchen", "1 Lounge"],
    imagesUrl: backgroundImages,
    videosUrl: [],
    propertyType: "Apartment",
    status: "for-sale",
  };
}

export default async function PropertyDetailsPage({
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
          <h2 className="lg:text-2xl text-xl  font-bold">
            PKR {property.price}
          </h2>
        </div>
        <div className="flex justify-between">
          <address className="flex items-center mt-2">
            <MapPin className="mr-1 w-4 h-4" />
            {property.location.address}, {property.location.city}
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
          <PropertyCarousel propertyImages={property.imagesUrl} />
          <PropertyOverviewCard property={property} />
          <PropertyDescriptionCard description={property.description} />
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
