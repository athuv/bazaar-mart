"use server";

import { LoginSchema, loginSchema } from "@/lib/zod";

export default async function loginTest(formData: LoginSchema) {
  const name = formData.usernameEmail;
  const password = formData.password;

  console.log(name, password);
  return {
    name,
    password,
    message: "from server to client",
  };
}
