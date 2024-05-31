import { z } from "zod";

export const emailSchema = z.object({
  email: z.string().min(1).email(),
});

export type EmailSchema = z.infer<typeof emailSchema>;
