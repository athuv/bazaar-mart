"use server";

import { LoginReturn } from "@/lib/types/types";
import { loginSchema } from "@/lib/zod";

export async function login(
  prevState: any,
  formData: FormData,
): Promise<LoginReturn> {
  const usernameEmail = formData.get("usernameEmail");
  const password = formData.get("password");

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
