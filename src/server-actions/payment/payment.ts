"use server";

import { base } from "@/utils/config";

export async function createCheckOutSession(
  prevState: any,
  formData: FormData
) {
  try {
    const item = {
      title: formData.get("title"),
      price: formData.get("price"),
      description: formData.get("description"),
      image: formData.get("image"),
      propertyId: formData.get("propertyId"),
      productId: formData.get("productId"),
    };

    const checkoutSession = await fetch(
      `${base.URL}/api/payment/createStripeSession`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item,
        }),
      }
    );
    console.log("stripe", checkoutSession);
    const res = await checkoutSession.json();
    console.log(res);
    console.log("res", res?.id);
    return res;
  } catch (e) {
    return {
      error: "An error occurred. Please try again.",
    };
  }
}
