"use server";

import { profileFormSchema, updatePasswordFormSchema } from "@/lib/formSchema";
import { encrypt, getSession } from "../auth";
import { cookies } from "next/headers";
import { base } from "@/utils/config";

type User = {
  name: string;
  email: string;
  phoneNumber: string;
  whatsappNumber: string;
  city: string;
  country: string;
  address: string;
  image: string;
};

export async function getUser(): Promise<User | null> {
  try {
    const session = await getSession();
    console.log(session);
    const response = await fetch(`${base.URL}/api/auth/verfiyToken`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": session?.user?.token,
      },
    });
    const result = await response.json();
    console.log(result);
    if (!result?.success) {
      return null;
    }
    const user = {
      name: result?.user?.name,
      email: result?.user?.email,
      phoneNumber: result?.user?.phoneNumber,
      whatsappNumber: result?.user?.whatsappNumber,
      city: result?.user?.city,
      country: result?.user?.country,
      address: result?.user?.address,
      image: result?.user?.image,
    };
    console.log(user);
    return user;
  } catch (error) {
    return null;
  }
}

export async function updateProfile(prevState: any, formData: FormData) {
  try {
    const result = profileFormSchema.safeParse({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phoneNumber: formData.get("mobile") as string,
    });

    if (!result?.success) {
      console.log(result?.error.flatten().fieldErrors);
      return { errors: result?.error.flatten().fieldErrors };
    }

    const session = await getSession();
    console.log(`session ${JSON.stringify(session)}`);

    console.log(
      result.data.name,
      result.data.phoneNumber,
      formData.get("profile-image"),
      formData.get("whatsapp"),
      formData.get("city"),
      formData.get("country"),
      formData.get("address")
    );

    const res = await fetch(`${base.URL}/api/user/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": session?.user?.token,
      },
      body: JSON.stringify({
        name: result.data.name,
        phoneNumber: result.data.phoneNumber,
        image: formData.get("profile-image"),
        whatsappNumber: formData.get("whatsapp"),
        city: formData.get("city"),
        country: formData.get("country"),
        address: formData.get("address"),
      }),
    });
    const response = await res.json();
    console.log(response);

    const user = { ...response?.user, token: session?.user?.token };

    if (response?.success) {
      // Create the session
      // const expires = new Date(Date.now() + 10 * 1000); // for 10 sec
      const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // for 24 hour
      const session = await encrypt({ user, expires });
      // Save the session in a cookie
      cookies().set("session", session, { expires, httpOnly: true });
    }

    return response;
  } catch (error) {
    console.log(error);
    return { error: "Failed to update profile. Please try again." };
  }

  // try {
  //   const response = await fetch(`${process.env.BASE_URL}/api/user/${id}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "x-access-token": session?.user?.token,
  //     },
  //   });
  //   const result = await response.json();
  // const user = result?.user;
  // if (result?.success) {
  //   // Create the session
  //   // const expires = new Date(Date.now() + 10 * 1000); // for 10 sec
  //   const expires = new Date(Date.now() + 1 * 60 * 60 * 1000); // for 1 hour
  //   const session = await encrypt({ user, expires });
  //   // Save the session in a cookie
  //   cookies().set("session", session, { expires, httpOnly: true });
  // } else {
  //   return result;
  // }

  // } catch (error) {
  //   return { error: "Failed to fetch user. Please try again." };
  // }
}

export async function updateProfilePassword(
  prevState: any,
  formData: FormData
) {
  const data = updatePasswordFormSchema.safeParse({
    password: formData.get("new-password") as string,
    confirmPassword: formData.get("confirm-new-password") as string,
  });
  if (!data.success) {
    return { errors: data.error.flatten().fieldErrors };
  }
  try {
    const session = await getSession();
    console.log(session?.user?.token);

    const response = await fetch(
      `${process.env.BASE_URL}/api/user/resetProfilePassword`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": session?.user?.token,
        },
        body: JSON.stringify({
          oldPassword: formData.get("current-password"),
          newPassword: data.data.password,
          confirmPassword: data.data.confirmPassword,
        }),
      }
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    return { error: "Failed to update password. Please try again." };
  }
}
