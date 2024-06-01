"use server";

import { propertyFormSchema } from "@/lib/formSchema";
import { headers } from "next/headers";
import { json } from "stream/consumers";

export async function addProperty(prevState: any, formData: FormData) {
  try {
    console.log(formData);

    const response = await fetch(
      `https://zameen-server.onrender.com/api/property/createProperty`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formData.get("title"),
          description: formData.get("description"),
          purpose: formData.get("purpose"),
          price: formData.get("price"),
          bedrooms: formData.get("bedrooms"),
          bathrooms: formData.get("bathrooms"),
          areaSize: {
            size: formData.get("area"),
            unit: formData.get("areaUnit"),
          },
          builtYear: 2015,
          imageUrl: formData.get("imagesUrl"),
          location: {
            address: "123 Main St",
            city: "Lahore",
            state: "Punjab",
            zipCode: "90001",
            geo: {
              lat: 999,
              lng: 887,
            },
          },
          features: ["Pool", "Garden", "Garage"],
          propertyType: formData.get("propertyType"),
          status: formData.get("purpose"),
        }),
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return { error: "Failed to add property. Please try again." };
  }
}

export async function getFilteredProperties(filters: any) {
  const filter = new URLSearchParams(filters).toString();

  console.log(
    `https://zameen-server.onrender.com/api/property/searchProperties?${filter}`
  );

  // convert filter into params

  try {
    const response = await fetch(
      `https://zameen-server.onrender.com/api/property/searchProperties?propertyType=Plot`,
      {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": "",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    return { property: data };
  } catch (error) {
    console.log(error);
    return { error: "Failed to get property. Please try again." };
  }
}
