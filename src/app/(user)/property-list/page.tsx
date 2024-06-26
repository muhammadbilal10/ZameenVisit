import { BreadCrumb } from "@/components/common/BreadCrumb";
import { CustomSelect } from "@/components/common/CustomSelect";
import Modal from "@/components/common/Modal";
import { Filter } from "@/components/property/PropertyFilters/Filter";
import PropertyCard from "@/components/property/PropertyList/PropertyCard";
import { Button } from "@/components/ui/button";
import {
  getUserPropertiesById,
  promoteProperty,
} from "@/server-actions/property/property";
import { PlusIcon, Search } from "lucide-react";
import Link from "next/link";
import React from "react";

const BREADCRUMB_ITEMS = [
  {
    id: 1,
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    id: 2,
    name: "Property List",
    href: "#",
    active: true,
  },
];

export default async function PropertyList({
  searchParams,
}: {
  searchParams: any;
}) {
  console.log(searchParams);
  if (searchParams?.propertyId && searchParams?.productId) {
    const propertyId = searchParams?.propertyId;
    const productId = Number(searchParams?.productId);
    console.log(propertyId, productId);
    const res = await promoteProperty(productId, propertyId);
  }
  const res = await getUserPropertiesById();
  console.log(res);
  return (
    <div className="sm:px-6 sm:mx-8 max-w-7xl">
      <div>
        <h1 className="text-2xl font-bold mb-2">Property List</h1>
      </div>
      <div className="mb-10 flex justify-between items-center">
        <BreadCrumb breadCrumbItem={BREADCRUMB_ITEMS} />
        <Button asChild>
          <Link href="/add-listing">
            <PlusIcon className="w-6 h-6 mr-2" />
            Add Property
          </Link>
        </Button>
      </div>
      {/* <div className="flex justify-between">
        <div>
          <Search className="w-6 h-6" />
        </div>
        <div className="flex">
          <Filter />
          <CustomSelect
            placeholderVal="Sort By: Latest"
            items={["Latest", "Popular", "New"]}
          />
        </div>
      </div> */}
      <div className="grid gap-4 mt-4  md:grid-cols-2 lg:grid-cols-3">
        {res?.properties?.map((property: any) => (
          <PropertyCard key={property.id} property={property} type={"edit"} />
        ))}
      </div>
    </div>
  );
}
