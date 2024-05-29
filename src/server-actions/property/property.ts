"use server";

import { propertyFormSchema } from "@/lib/formSchema";

export async function addProperty(prevState: any, formData: FormData) {
  try {
    const imagesList = formData.getAll("imagesUrl");
    const propertyData = propertyFormSchema.safeParse(formData);
    console.log(propertyData);

    // const response = await fetch(
    //   `https://zameen-server.onrender.com/api/property/createProperty`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({}),
    //   }
    // );
  } catch (error) {
    console.log(error);
    return { error: "Failed to add property. Please try again." };
  }
}
