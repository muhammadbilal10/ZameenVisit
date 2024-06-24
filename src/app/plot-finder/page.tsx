import PlotFinderMap from "@/components/property/PropertyMap/PlotFinderMap";
import {
  getLatestProperties,
  getPlotFinderProperties,
} from "@/server-actions/property/property";
import { Property } from "@/types/Property";
import React from "react";

export default async function PlotFinder({
  searchParams,
}: {
  searchParams: any;
}) {
  const res = await getPlotFinderProperties(searchParams?.location);
  const properties = res?.properties as Property[];
  console.log(properties);

  return (
    <div>
      <PlotFinderMap propertyList={properties} />
    </div>
  );
}
