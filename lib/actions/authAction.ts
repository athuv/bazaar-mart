"use server";

import { createSbClient } from "@/lib/db/supabase";
import { SignupSchema, signupSchema } from "@/lib/zod";


type err = {
  type?: "field-error" | 'server-error' | 'email-sent-success';
  field?: "email" | "password" | "root" | undefined;
  message?: string | undefined;
}

export async function signup(formData: SignupSchema):Promise<err[] | err > {

  const supabase = await createSbClient();
  const validationResults = signupSchema.safeParse(formData);

  if (!validationResults.success) {
    const zodErrors:err[] = validationResults.error.issues.map((issue) => ({
      type: 'field-error',
      field: issue.path[0] as "email" | "password",
      message: issue.message,
    }));

    return zodErrors;
  }

  const { data, error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
  });

  if(error) {
    return {
      type: 'server-error',
      message: `Something went wrong, Please contact us.`
    }
  }

  return {
    type: 'email-sent-success',
    message: `A verification email has been sent to ${data.user?.email}.`
  }
}
