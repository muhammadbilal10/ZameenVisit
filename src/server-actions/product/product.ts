"use server";

import { base } from "@/utils/config";
import { getSession } from "../auth";

export async function getAllProducts() {
  try {
    const session = await getSession();
    const response = await fetch(`${base.URL}/api/product`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": session?.user?.token,
      },
    });
    const res = await response.json();
    return res;
  } catch (error) {
    return {
      error: "An error occurred. Please try again.",
    };
  }
}
