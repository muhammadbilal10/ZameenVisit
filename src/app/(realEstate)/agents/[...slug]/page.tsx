import { BreadCrumb } from "@/components/common/BreadCrumb";
import AgencyDetailsCard from "@/components/property/Agencies/AgencyDetailsCard";
import AgencyRecentProperties from "@/components/property/Agencies/AgencyRecentProperties";
import AgentContactForm from "@/components/property/Agencies/AgentContactForm";
import { getAgencyById } from "@/server-actions/Agency/agency";
import { Home } from "lucide-react";
import React from "react";

const CONTACT_BREAD_CRUMB_LIST = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Agencies",
    href: "/agents",
  },
];

export default async function AgentDetailsPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const agencyName = params.slug[0] as string;

  const agentId = Number(params.slug[1]);

  const data = await getAgencyById(agentId);

  const agencyDetails = data?.agency;
  console.log(agencyDetails);

  const CONTACT_BREAD_CRUMB_LIST = [
    {
      id: 1,
      name: "Home",
      href: "/",
    },
    {
      id: 2,
      name: "Agencies",
      href: "/agents",
    },
    {
      id: 3,
      name: `${agencyDetails?.agencyName}`,
      href: `/agents/${params.slug[1]}`,
      active: true,
    },
  ];

  return (
    <div className="sm:px-8 px-3 py-7 max-w-7xl mx-auto">
      <div className="space-y-2 my-4">
        <BreadCrumb breadCrumbItem={CONTACT_BREAD_CRUMB_LIST} />
      </div>
      <div className="grid lg:grid-cols-12 gap-4 ">
        <div className="lg:col-span-8 space-y-10">
          <AgencyDetailsCard {...agencyDetails} />

          <div>
            <h1 className="text-2xl font-semibold my-4">
              Properties by {agencyDetails?.agencyName}
            </h1>

            <div className="flex max-sm:flex-col gap-4 justify-between max-w-xl">
              <div className="flex space-x-2 items-center">
                <div className="p-2 bg-muted rounded-full">
                  <Home className="w-6 h-6" strokeWidth={1.5} />
                </div>

                <span className="font-semibold">{156} properties for sale</span>
              </div>
              <div className="flex space-x-2 items-center">
                <div className="p-2 bg-muted rounded-full">
                  <Home className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <span className="font-semibold">{14} properties for rent</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* {properties?.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))} */}
            </div>
          </div>
          <div className="pt-10">
            <h1 className="text-2xl font-semibold my-4 ">
              About {agencyDetails?.agencyName}
            </h1>
            <p className="text-gray-600">{agencyDetails?.description}</p>
          </div>
        </div>
        <div className="lg:col-span-4">
          <AgentContactForm
            agentEmail={agencyDetails?.agencyEmail}
            agentName={agencyDetails?.agencyName}
          />
        </div>
      </div>
      <AgencyRecentProperties />
    </div>
  );
}
