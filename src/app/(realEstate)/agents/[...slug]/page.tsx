import { BreadCrumb } from "@/components/common/BreadCrumb";
import AgencyDetailsCard from "@/components/property/Agencies/AgencyDetailsCard";
import AgencyRecentProperties from "@/components/property/Agencies/AgencyRecentProperties";
import AgentContactForm from "@/components/property/Agencies/AgentContactForm";
import PropertyCard from "@/components/property/PropertyList/PropertyCard";
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

  const agencyRecentProperties = data?.recentProperties;

  console.log(agencyRecentProperties);

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

            <div className="flex max-sm:flex-col gap-4 items-start justify-between max-w-xl">
              <div className="space-y-4">
                <div className="flex space-x-2 items-center">
                  <div className="p-2 bg-muted rounded-full">
                    <Home className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <span className="font-semibold">
                    {data?.totalSell} properties for sale
                  </span>
                </div>
                <div className="flex gap-10">
                  {Object.keys(data?.propertySell).map((type) => (
                    <div
                      key={type}
                      className="w-28 h-16 p-4 border rounded-xl border-muted-foreground flex flex-col justify-center items-center"
                    >
                      <p key={type} className="text-xl font-semibold">
                        {" "}
                        {data?.propertySell[type]}
                      </p>
                      <span className="text-muted-foreground">{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex space-x-2 items-center">
                  <div className="p-2 bg-muted rounded-full">
                    <Home className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <span className="font-semibold">
                    {data?.totalRent} properties for rent
                  </span>
                </div>
                <div className="flex">
                  {Object.keys(data?.propertyRent).map((type) => (
                    <div
                      key={type}
                      className="p-4 h-16 w-28 border rounded-xl border-muted-foreground flex flex-col justify-center items-center"
                    >
                      <p key={type} className="text-xl font-semibold">
                        {" "}
                        {data?.propertyRent[type]}
                      </p>
                      <span className="text-muted-foreground">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
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
      {agencyRecentProperties?.length > 0 && (
        <AgencyRecentProperties
          agencyRecentProperties={agencyRecentProperties}
        />
      )}
    </div>
  );
}
