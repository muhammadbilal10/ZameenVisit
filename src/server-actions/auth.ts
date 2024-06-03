"use server";

import {
  forgotPasswordFormSchema,
  signupFormSchema,
  updatePasswordFormSchema,
} from "@/lib/formSchema";
import { base } from "@/utils/config";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

const secretKey = "secret";
const BASE_URL = "https://zameen-server.onrender.com";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h from now")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function logout() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
  redirect("/");
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;
  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}

export async function login(prevState: any, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(email + " " + password);

  try {
    //api.example.com/articles/${articleId}/comments
    const response = await fetch(`${base.URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    console.log(result);
    console.log(result);
    const user = result?.user;
    console.log(user);
    if (result?.success) {
      // Create the session
      // const expires = new Date(Date.now() + 10 * 1000); // for 10 sec
      const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // for 1 hour
      const session = await encrypt({ user, expires });
      // Save the session in a cookie
      cookies().set("session", session, { expires, httpOnly: true });
    } else {
      return result;
    }
  } catch (error) {
    console.log(error);
    return { error: "Failed to login. Please try again." };
  }
  redirect("/add-listing");
}

export async function signup(prevState: any, formData: FormData) {
  const results = signupFormSchema.safeParse({
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirm-password") as string,
    phoneNumber: formData.get("phone-number") as string,
    role: formData.get("role") as string,
  });

  if (!results.success) {
    console.log(results.error.flatten().fieldErrors);
    return {
      errors: results.error.flatten().fieldErrors,
    };
  }

  try {
    const response = await fetch(
      `https://zameen-server.onrender.com/api/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: results.data.name,
          email: results.data.email,
          phoneNumber: results.data.phoneNumber,
          password: results.data.password,
          role: results.data.role,
        }),
      }
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    return { error: "Failed to signup. Please try again." };
  }
}

export async function forgotPassword(prevState: any, formData: FormData) {
  const data = forgotPasswordFormSchema.safeParse({
    email: formData.get("email"),
  });

  if (!data.success) {
    return {
      errors: data.error.flatten().fieldErrors,
    };
  }

  try {
    const response = await fetch(
      `https://zameen-server.onrender.com/api/auth/forgotPassword`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.data.email }),
      }
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return { error: "Failed to send reset password link. Please try again." };
  }
}

export async function otpVerification(prevState: any, formData: FormData) {
  const pin = formData.get("pin");
  try {
    const response = await fetch(
      `https://zameen-server.onrender.com/api/auth/verifyOtp`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.get("email"),
          otp: pin,
        }),
      }
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return { error: "Failed to verify OTP. Please try again." };
  }
}

export async function resendOTP(prevState: any, formData: FormData) {
  try {
    const response = await fetch(
      `https://zameen-server.onrender.com/api/auth/resendOtp`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.get("email") }),
      }
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return { error: "Failed to resend OTP. Please try again." };
  }
}

export async function updatePassword(prevState: any, formData: FormData) {
  try {
    const data = updatePasswordFormSchema.safeParse({
      password: formData.get("password"),
      confirmPassword: formData.get("confirm-password"),
    });

    if (!data.success) {
      return {
        errors: data.error.flatten().fieldErrors,
      };
    }

    const response = await fetch(
      `https://zameen-server.onrender.com/api/auth/resetPassword`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.get("email"),
          password: formData.get("password"),
          confirmPassword: formData.get("confirm-password"),
        }),
      }
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return { error: "Failed to update password. Please try again." };
  }
}
