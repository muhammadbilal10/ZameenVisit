import { BreadCrumb } from "@/components/common/BreadCrumb";
import AgencyInfoTabs from "@/components/dashboard/tabs/AgencyInfoTabs";
import AgencyInfoForm from "@/components/property/Agencies/AgencyInfoForm";
import { getAgencyInfo } from "@/server-actions/Agency/agency";
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
    name: "Agent Info",
    href: "/agent-info",
    active: true,
  },
];

export default async function AgencyInfoPage() {
  return (
    <div className="sm:px-6 sm:mx-8 max-w-7xl">
      <div>
        <h1 className="text-2xl font-bold mb-2">Account</h1>
      </div>
      <div className="mb-10">
        <BreadCrumb breadCrumbItem={BREADCRUMB_ITEMS} />
      </div>

      <div>
        <div className="">
          <AgencyInfoTabs />
        </div>
      </div>
    </div>
  );
}
