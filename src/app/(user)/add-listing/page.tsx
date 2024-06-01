import { BreadCrumb } from "@/components/common/BreadCrumb";
import { PropertyAddForm } from "@/components/property/PropertyForm/PropertyAddForm";
import { getSession } from "@/server-actions/auth";
import React from "react";

const BREADCRUMB_ITEMS = [
  {
    id: 1,
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    id: 2,
    name: "Add Listing",
    href: "#",
    active: true,
  },
];

export default async function AddListingPage() {
  const session = await getSession();
  console.log(session);
  return (
    <div className="sm:px-6 sm:mx-8 max-w-7xl">
      <div>
        <h1 className="text-2xl font-bold mb-2">Create a new property</h1>
      </div>
      <div className="mb-10">
        <BreadCrumb breadCrumbItem={BREADCRUMB_ITEMS} />
      </div>

      <PropertyAddForm />
    </div>
  );
}
