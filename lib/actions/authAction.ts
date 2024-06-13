"use server";

import { getBackEndClient } from "@/lib/actions/actionHelper";
import { SignupSchema, signupSchema } from "@/lib/zod";
import { emailSchema } from "@/lib/zod/emailSchema";
import { redirect } from "next/navigation";

type err = {
  type?: "field-error" | "server-error" | "email-sent-success";
  field?: "email" | "password" | "root" | undefined;
  message?: string | undefined;
};

export async function signup(formData: SignupSchema): Promise<err[] | err> {
  const supabase = await getBackEndClient();
  const validationResults = signupSchema.safeParse(formData);

  if (!validationResults.success) {
    const zodErrors: err[] = validationResults.error.issues.map((issue) => ({
      type: "field-error",
      field: issue.path[0] as "email" | "password",
      message: issue.message,
    }));

    return zodErrors;
  }

  const { data, error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
  });

  if (error) {
    return {
      type: "server-error",
      message: `Something went wrong, Please contact us.`,
    };
  }

  return {
    type: "email-sent-success",
    message: `A verification email has been sent to ${data.user?.email}.`,
  };
}

export async function login(formData: SignupSchema): Promise<err[] | err> {
  const validationResults = signupSchema.safeParse(formData);

  if (!validationResults.success) {
    const zodErrors: err[] = validationResults.error.issues.map((issue) => ({
      type: "field-error",
      field: issue.path[0] as "email" | "password",
      message: issue.message,
    }));

    return zodErrors;
  }

  const supabase = await getBackEndClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  });

  if (error) {
    return {
      type: "server-error",
      message: error.message,
    };
  }

  redirect("/");
}

export async function logout() {
  const supabase = await getBackEndClient();
  const { error } = await supabase.auth.signOut({ scope: "local" });

  if (!error) {
    redirect("/auth");
  }
}

export async function getUser() {
  const supabase = await getBackEndClient();
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error("Error fetching user:", error);
    return null;
  }

  return data.user || null;
}

export async function resendConfirmationEmail(email: string) {
  const validationResults = emailSchema.safeParse({ email });

  if (validationResults.success) {
    const supabase = await getBackEndClient();
    const { error } = await supabase.auth.resend({
      type: "signup",
      email: email,
    });

    if (error === null) {
      return {
        type: "success",
        message: `Confirmation Link Sent to ${email}`,
      };
    }
  }
}
