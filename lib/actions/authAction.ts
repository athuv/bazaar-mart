"use server";

import { LoginReturn } from "@/lib/types/types";
import { LoginSchema, loginSchema } from "@/lib/zod";

export async function login(formData: LoginSchema): Promise<LoginReturn> {
  const usernameEmail = formData.usernameEmail;
  const password = formData.password;

  const result = loginSchema.safeParse({ usernameEmail, password });

  let zodErrors: LoginReturn = {};

  if (!result.success) {
    result.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });

    return zodErrors;
  }

  return {};
}
