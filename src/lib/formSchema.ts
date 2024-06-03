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
    role: z.string().min(1, { message: "Please select a role" }),
    phoneNumber: z.string().min(10, {
      message: "Phone number is required",
    }),
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

export const profileFormSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters long",
  }),
  phoneNumber: z.string().min(1, {
    message: "Phone number is required",
  }),
});

export const forgotPasswordFormSchema = z.object({
  email: z.string().email(),
});

export const updatePasswordFormSchema = z
  .object({
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

    confirmPassword: z.string().min(1, {
      message: "Confirm password is required",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// Property Form Schema
export const propertyFormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  price: z.string().min(1, { message: "Please enter a price" }),
  // currencyUnit: z.string().nonempty({ message: "Please select a currency" }),
  propertyType: z
    .string()
    .nonempty({ message: "Please select a property type" }),
  purpose: z.string().min(1, { message: "Please select a purpose" }),
  bedrooms: z.string().min(1, { message: "Please select a bedroom" }),
  bathrooms: z.string().min(1, { message: "Please select a bathroom" }),

  area: z.string().min(1, { message: "Area must be a positive number." }),
  areaUnit: z.string().min(1, { message: "Please select a area unit" }),

  address: z.string().min(1, { message: "Address is required" }),
  city: z.string().min(1, { message: "Please select a city" }),
  state: z.string().min(1, { message: "State is required" }),
  zipCode: z.string().min(1, { message: "zipCode is required" }),
});
