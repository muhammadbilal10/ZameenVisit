"use server";

import { signupFormSchema, updatePasswordFormSchema } from "@/lib/formSchema";

export async function login(prevState: any, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(email, password);

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
  });

  if (!results.success) {
    console.log(results.error.flatten().fieldErrors);
    return {
      errors: results.error.flatten().fieldErrors,
    };
  }

  console.log(results.data);

  // try {
  //   const response = await fetch(
  //     `https://zameen-server.onrender.com/api/auth/user/register`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ name, email, password }),
  //     }
  //   );
  //   const result = await response.json();
  //   console.log(result);
  //   return result;
  // } catch (error) {
  //   console.log(error);
  //   return { message: "Failed to signup. Please try again." };
  // }
}

export async function forgotPassword(prevState: any, formData: FormData) {
  const email = formData.get("email");
  return { message: `Password reset link sent to ${email}`, status: "success" };
}

export async function pinVerification(prevState: any, formData: FormData) {
  const pin = formData.get("pin");
  console.log(pin);
  return { message: `Pin verification successful`, status: "success" };
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
