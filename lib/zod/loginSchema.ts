import { z } from "zod";

export const loginSchema = z.object({
  usernameEmail: z
    .string({ required_error: "Please enter a username or email." })
    .min(1, "Please enter a username or email."),
  password: z
    .string({ required_error: "Please enter your password." })
    .min(6, "Password must be at least 6 characters."),
});

export type LoginSchema = z.infer<typeof loginSchema>;
