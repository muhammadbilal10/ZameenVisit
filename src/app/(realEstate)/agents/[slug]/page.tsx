import CustomPagination from "@/components/common/CustomPagination";
import AgencyCard from "@/components/property/Agencies/AgencyCard";
import AgencySearchCard from "@/components/property/Agencies/AgencySearchCard";
import { getAgencies } from "@/server-actions/Agency/agency";
import React, { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default async function AgenciesListingPage({
  params,
  searchParams,
}: {
  params: { slug: String };
  searchParams: any;
}) {
  return (
    <div className="">
      <div className="py-16 bg-[#f9f8f3] px-8">
        <div className="max-w-7xl mx-auto">
          <AgencySearchCard />
        </div>
      </div>

      <div className="mt-10 px-10 max-w-7xl mx-auto">
        <Suspense
          fallback={
            <div>
              <Skeleton className="w-52 h-8  mb-10" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {Array.from({ length: 12 }, (_, index) => (
                  <Skeleton key={index} className="h-72" />
                ))}
              </div>
            </div>
          }
        >
          <AgenciesListing slug={params?.slug} searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}

async function AgenciesListing({
  slug,
  searchParams,
}: {
  slug: String;
  searchParams: any;
}) {
  console.log(slug);
  const currentPage = Number(searchParams?.page) || 1;
  // const delay = (ms: number) =>
  //   new Promise((resolve) => setTimeout(resolve, ms));

  // await delay(5000);
  const data = await getAgencies();
  const agencies = data?.agencies;
  console.log(agencies);
  return (
    <>
      <div className="">
        <h1 className="col-span-4 text-2xl font-bold mb-10">
          {agencies.length} Property Agencies in
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
          {agencies?.map((agency: any, index: any) => (
            <AgencyCard key={index} {...agency} />
          ))}
        </div>
      </div>

      <div className="mt-8">
        <CustomPagination
          totalPages={agencies?.length}
          currentPage={currentPage}
        />
      </div>
    </>
  );
}
