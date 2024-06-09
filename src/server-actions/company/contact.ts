"use server";

import { base } from "@/utils/config";
import { getSession } from "../auth";

export async function contactUs(prevState: any, formData: FormData) {
  try {
    const { name, email, mobileNumber, message } = Object.fromEntries(
      formData.entries()
    );
    const session = await getSession();
    const response = await fetch(`${base.URL}/api/contact`, {
      method: "POST",
      body: JSON.stringify({ name, email, mobileNumber, message }),
      headers: {
        "Content-Type": "application/json",
        "x-access-token": session?.user?.token || "",
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return {
      error: "Failed to send email",
    };
  }
}
