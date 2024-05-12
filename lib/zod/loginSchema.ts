import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Please enter your email." })
    .min(1, "Please enter your email.")
    .email("Please provide valid email"),
  password: z
    .string({ required_error: "Please enter your password." })
    .min(6, "Password must be at least 6 characters."),
});

export type LoginSchema = z.infer<typeof loginSchema>;
