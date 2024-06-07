"use server";

export async function contactUs(prevState: any, formData: FormData) {
  try {
    const response = await fetch("https://api.zameenvisit.com/contact", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
