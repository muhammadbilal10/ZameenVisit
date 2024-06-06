import { BreadCrumb } from "@/components/common/BreadCrumb";
import CustomPagination from "@/components/common/CustomPagination";
import PropertyCard from "@/components/property/PropertyList/PropertyCard";
import { PropertySearch } from "@/components/property/propertySearch";
import { PropertySearchCard } from "@/components/property/propertySearch/PropertySearchCard";
import { properties } from "@/constants";
import { getFilteredProperties } from "@/server-actions/property/property";

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

async function getProperties(searchParams: any) {
  const propertiesData = await getFilteredProperties(searchParams);
  console.log("propertiesData", propertiesData);
  return propertiesData?.properties;
}

export default async function AdvancedSearchPage({
  searchParams,
}: {
  searchParams: any;
}) {
  console.log("AdvancedSearchPage", searchParams);
  const currentPage = Number(searchParams?.page) || 1;
  const properties = await getProperties(searchParams);
  console.log("properties", properties);

  return (
    <div className="px-5 py-7">
      <div className="space-y-2">
        <BreadCrumb breadCrumbItem={BREAD_CRUMB_LIST} />
        <h1 className="text-2xl font-bold text-gray-800">Search Properties</h1>
      </div>
      <div className="py-8">
        <PropertySearch searchActions={searchParams} />
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
        {properties?.map((property: any) => (
          <PropertyCard key={property.id} property={property || []} />
        ))}
      </div>
      <div className="mt-8">
        <CustomPagination totalPages={6} currentPage={currentPage} />
      </div>
    </div>
  );
}
