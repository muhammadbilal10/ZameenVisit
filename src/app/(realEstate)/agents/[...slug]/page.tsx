import { BreadCrumb } from "@/components/common/BreadCrumb";
import AgencyDetailsCard from "@/components/property/Agencies/AgencyDetailsCard";
import AgencyRecentProperties from "@/components/property/Agencies/AgencyRecentProperties";
import AgentContactForm from "@/components/property/Agencies/AgentContactForm";
import { getAgencyById } from "@/server-actions/Agency/agency";
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
    <div className="sm:px-8 px-3 py-7">
      <div className="space-y-2 my-4">
        <BreadCrumb breadCrumbItem={CONTACT_BREAD_CRUMB_LIST} />
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8">
          <AgencyDetailsCard {...agencyDetails} />
          <div>
            <h1 className="text-2xl font-semibold my-4">
              About {agencyDetails?.agencyName}
            </h1>
            <p className="text-gray-600">{agencyDetails?.description}</p>
          </div>
        </div>
        <div className="col-span-4">
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
