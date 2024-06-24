import { BreadCrumb } from "@/components/common/BreadCrumb";
import FeaturedAgencies from "@/components/layout/FeaturedAgencies";
import TitaniumAgencies from "@/components/layout/TitaniumAgencies";
import AgencySearchCard from "@/components/property/Agencies/AgencySearchCard";
import { PropertySearchCard } from "@/components/property/propertySearch/PropertySearchCard";
import { AgencySkeletonCard } from "@/components/skeleton/AgencySkeletonCard";
import { Skeleton } from "@/components/ui/skeleton";
import { titaniumAgencies } from "@/constants";
import { cn } from "@/lib/utils";
import { getAgencies } from "@/server-actions/Agency/agency";
import React, { Suspense } from "react";

const BREAD_CRUMB_LIST = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Agents ",
    href: "/agents",
    active: true,
  },
];

export default async function AgentsPage() {
  return (
    <div className="">
      <div className="py-16 bg-[#f9f8f3] px-8">
        <div className="max-w-7xl mx-auto">
          <AgencySearchCard />
        </div>

        {/* <div className="space-y-2">
          <BreadCrumb breadCrumbItem={BREAD_CRUMB_LIST} />
          <h1 className="text-2xl font-bold text-gray-800">
            Search Properties
          </h1>
        </div> */}
      </div>

      <div className="min-h-screen max-w-sm  sm:max-w-7xl sm:mx-auto px-8">
        <section className="">
          <Suspense
            fallback={
              <div>
                <Skeleton className="w-[180px] h-[20px] my-10" />
                <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div
                      key={index}
                      className={`
                      ${index < 1 ? "block" : "hidden"}
                      ${index < 3 ? "md:block" : "md:hidden"} ${
                        index < 4 ? "lg:block" : "lg:hidden"
                      }
                    ${index < 5 ? "xl:block" : "xl:hidden"}
                    `}
                    >
                      <AgencySkeletonCard />
                    </div>
                  ))}
                </div>
              </div>
            }
          >
            <TitaniumAgencies />
          </Suspense>
        </section>

        {/* Featured Agencies */}
        <section className="">
          <Suspense
            fallback={
              <div>
                <Skeleton className="w-[180px] h-[20px] my-10" />
                <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div
                      key={index}
                      className={`
                      ${index < 1 ? "block" : "hidden"}
                      ${index < 3 ? "md:block" : "md:hidden"} ${
                        index < 4 ? "lg:block" : "lg:hidden"
                      }
                    ${index < 5 ? "xl:block" : "xl:hidden"}
                    `}
                    >
                      <AgencySkeletonCard />
                    </div>
                  ))}
                </div>
              </div>
            }
          >
            <FeaturedAgencies />
          </Suspense>
        </section>
      </div>
    </div>
  );
}
