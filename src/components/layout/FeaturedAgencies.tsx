import { getAgencies } from "@/server-actions/Agency/agency";
import AgencyCard from "../property/Agencies/AgencyCard";

export default async function FeaturedAgencies() {
  const data = await getAgencies();
  const agencies = data?.agencies;
  return (
    <div>
      <h2 className="ml-4 mb-10 mt-10 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight">
        Featured Agencies
      </h2>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {agencies?.map((agency: any, index: number) => (
          <div key={index}>
            <AgencyCard {...agency} />
          </div>
        ))}
      </div>
    </div>
  );
}
