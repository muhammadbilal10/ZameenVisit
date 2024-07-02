import React from "react";
import PropertyCard from "../PropertyList/PropertyCard";

export default function AgencyRecentProperties({
  agencyRecentProperties,
}: {
  agencyRecentProperties: any;
}) {
  console.log(agencyRecentProperties);

  return (
    <div className="mt-4 space-y-4">
      <h2 className="text-2xl font-semibold">Recent Properties</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {agencyRecentProperties?.map((property: any) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}
