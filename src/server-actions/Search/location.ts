"use server";

import { base } from "@/utils/config";
import { getSession } from "../auth";
//   const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${mapboxgl.accessToken}`);
// const BASE_URL = "https://api.mapbox.com/search/geocode/v6/forward";
// `${BASE_URL}?q=${loc}&country=pk&proximity=ip&language=en&access_token=${base.MAP_TOKEN}`,
const BASE_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places";


export async function getLocations(prevState: any, formData: FormData) {
  const loc = formData.get("location") as string;
  console.log(loc);
  try {
    const response = await fetch(
      `${BASE_URL}/${encodeURIComponent(loc)}.json?access_token=${base.MAP_TOKEN}&country=PK&types=place,locality,neighborhood,address,poi,region,district,postcode&autocomplete=true&limit=10`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);

    // if (data?.features?.length === 0) {
    //   // If no results found, retry with different settings or log the issue
    //   console.log("No results found, consider broadening search criteria");
    //   return { error: "No locations found. Please try a different search." };
    // }

    const features = data?.features?.map((feature: any) => {
      const { geometry, context } = feature;
      // Extracting city name from context
      const cityContext = context?.find((c: any) => c.id.startsWith("place"));
      const regionContext = context?.find((c: any) => c.id.startsWith("region"));
      const cityName = cityContext?.text || "";
      const regionName = regionContext?.text || "";
      console.log(cityName);

      return {
        city: cityName,
        region: regionName,
        address: feature?.place_name,
        geo: {
          lat: geometry?.coordinates[1],
          lng: geometry?.coordinates[0]
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



export async function getCities() {
  try {
    const session = await getSession();
    const response = await fetch(`${base.URL}/api/property/cities`, {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": session?.user?.token,
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return { error: "Failed to get cities. Please try again." };
  }
}

export async function getLocationsByCity(city: string) {
  try {
    const session = await getSession();
    const response = await fetch(
      `${base.URL}/api/property/findAddressesByCity`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": session?.user?.token,
        },
        body: JSON.stringify({ city }),
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return { error: "Failed to get locations. Please try again." };
  }
}
