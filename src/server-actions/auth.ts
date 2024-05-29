"use server";

import {
  forgotPasswordFormSchema,
  signupFormSchema,
  updatePasswordFormSchema,
} from "@/lib/formSchema";
import { error } from "console";
import { redirect } from "next/navigation";
import { isValidPhoneNumber } from "react-phone-number-input";

export async function login(prevState: any, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    //api.example.com/articles/${articleId}/comments
    const response = await fetch(
      `https://zameen-server.onrender.com/api/auth/user/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return { message: "Failed to login. Please try again." };
  }
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

  console.log(results);

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
          image: "",
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
      `https://zameen-server.onrender.com/api/auth/user/forgotPassword`,
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
    return result.append("email", data.data.email);
  } catch (error) {
    console.log(error);
    return { message: "Failed to send reset password link. Please try again." };
  }
}

export async function otpVerification(prevState: any, formData: FormData) {
  const pin = formData.get("pin");
  console.log(formData.get("email"));
  console.log(pin);
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

export async function updatePassword(prevState: any, formData: FormData) {
  const data = updatePasswordFormSchema.safeParse({
    password: formData.get("new-password"),
    confirmPassword: formData.get("confirm-new-password"),
  });

  if (!data.success) {
    return {
      errors: data.error.flatten().fieldErrors,
    };
  }

  // check current password from database if exist or not
  // if exist then update password
  // else return error message
  if (true) {
    return {
      currentPassword: "Current password is incorrect",
      status: "error",
    };
  }

  return { message: "Password updated successfully", status: "success" };
}
