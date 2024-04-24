import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const signupFormSchema = z
  .object({
    name: z
      .string()
      .min(3, {
        message: "Name must be at least 3 characters long",
      })
      .refine((name) => /\s/.test(name), {
        message: "Full name must contain at least one space",
        path: ["name"],
      }),
    email: z.string().email(),
    password: z
      .string()
      .min(8, {
        message:
          "Use 8 or more characters with a mix of letters, numbers and symbols",
      })

      .refine((password) => /[a-z]/.test(password), {
        message:
          "Use 8 or more characters with a mix of letters, numbers and symbols",
        path: ["password"],
      })
      .refine((password) => /[0-9]/.test(password), {
        message:
          "Use 8 or more characters with a mix of letters, numbers and symbols",
        path: ["password"],
      })
      .refine(
        (password) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password),
        {
          message:
            "Use 8 or more characters with a mix of letters, numbers and symbols",
          path: ["password"],
        }
      )
      .refine((password) => /[A-Z]/.test(password), {
        message: "Password must contain at least one uppercase letter",
        path: ["password"],
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
