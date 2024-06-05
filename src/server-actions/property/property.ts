"use server";

import { propertyFormSchema } from "@/lib/formSchema";
import { headers } from "next/headers";
import { json } from "stream/consumers";
import { getSession } from "../auth";
import { base } from "@/utils/config";

export async function addProperty(prevState: any, formData: FormData) {
  const session = await getSession();
  const propertyImagesURL = JSON.parse(
    (formData?.get("imagesUrl") as string) || "[]"
  );
  const videoURL = JSON.parse((formData?.get("videoUrl") as string) || "[]");
  const amenties = JSON.parse((formData?.get("amenties") as string) || "[]");
  console.log(formData);

  try {
    const response = await fetch(`${base.URL}/api/property/createProperty`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `${session?.user?.token}`,
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
        imageUrl: propertyImagesURL,
        videoUrl: videoURL,
        location: formData.get("location"),
        propertyType: formData.get("propertyType"),
        features: amenties,
        status: formData.get("purpose"),
      }),
    });
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
  console.log(filter);

  // convert filter into params

  try {
    console.log(`${base.URL}/api/property/searchProperties?${filter}`);
    const session = await getSession();
    const response = await fetch(
      `${base.URL}/api/property/searchProperties?${filter}`,
      {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": session?.user?.token,
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

export async function getPropertiesById() {
  const session = await getSession();
  try {
    const response = await fetch(`${base.URL}/api/property/getUserProperties`, {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": session?.user?.token,
      },
    });
    const properties = await response.json();
    return properties;
  } catch (error) {
    console.log(error);
    return { error: "Failed to get property. Please try again." };
  }
}
