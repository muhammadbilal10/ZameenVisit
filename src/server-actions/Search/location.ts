"use server";

const BASE_URL = "https://api.mapbox.com/search/geocode/v6/forward";

export async function getLocations(prevState: any, formData: FormData) {
  const loc = formData.get("location") as string;
  try {
    const response = await fetch(
      `${BASE_URL}?q=${loc}&country=pk&proximity=ip&language=en&access_token=${process.env.MAPBOX_ACCESS_TOKEN}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    const features = data.features.map((feature: any) => {
      const { properties } = feature;
      return {
        city: properties.name,
        fullAddress: properties.full_address,
      };
    });
    console.log(features);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return { error: "Failed to get locations. Please try again." };
  }
}
