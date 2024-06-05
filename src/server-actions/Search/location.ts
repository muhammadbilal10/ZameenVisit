"use server";

import { base } from "@/utils/config";

const BASE_URL = "https://api.mapbox.com/search/geocode/v6/forward";

export async function getLocations(prevState: any, formData: FormData) {
  const loc = formData.get("location") as string;
  try {
    const response = await fetch(
      `${BASE_URL}?q=${loc}&country=pk&proximity=ip&language=en&access_token=${base.MAP_TOKEN}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    const features = data.features.map((feature: any) => {
      const { properties } = feature;
      console.log(properties);
      return {
        city: properties.name,
        address: properties.full_address,
        geo: {
          lat: properties?.coordinates?.latitude,
          lng: properties?.coordinates?.longitude,
        },
      };
    });
    console.log(features);
    return features;
  } catch (error) {
    console.log(error);
    return { error: "Failed to get locations. Please try again." };
  }
}
