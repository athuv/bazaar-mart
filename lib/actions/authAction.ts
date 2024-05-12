"use server";

import { LoginReturn } from "@/lib/types/types";
import { LoginSchema, loginSchema } from "@/lib/zod";

export async function login(formData: LoginSchema): Promise<LoginReturn> {
  const email = formData.email;
  const password = formData.password;

  const result = loginSchema.safeParse({ email, password });

  let zodErrors: LoginReturn = {};

  if (!result.success) {
    result.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });

    return zodErrors;
  }

  return {};
}
