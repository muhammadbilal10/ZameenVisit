"use server";

import { signupFormSchema } from "@/lib/formSchema";

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
