import { BreadCrumb } from "@/components/common/BreadCrumb";
import PropertyCard from "@/components/property/PropertyList/PropertyCard";
import { PropertySearchCard } from "@/components/property/propertySearch/PropertySearchCard";
import { properties } from "@/constants";

const BREAD_CRUMB_LIST = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Search Properties",
    href: "/advanced-search",
    active: true,
  },
];

async function getProperties() {
  const propertiesData = properties;
  return propertiesData;
}

export default async function AdvancedSearchPage({
  searchParams,
}: {
  searchParams: any;
}) {
  console.log("AdvancedSearchPage", searchParams);
  const properties = await getProperties();
  return (
    <div className="px-5 py-7">
      <div className="space-y-2">
        <BreadCrumb breadCrumbItem={BREAD_CRUMB_LIST} />
        <h1 className="text-2xl font-bold text-gray-800">Search Properties</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}