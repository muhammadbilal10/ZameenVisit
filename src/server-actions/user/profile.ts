"use server";

import { profileFormSchema } from "@/lib/formSchema";

export async function updateProfile(prevState: any, formData: FormData) {
  console.log(formData);
  const data = profileFormSchema.safeParse({
    name: formData.get("name") as string,
    email: formData.get("email") as string,
  });
}
