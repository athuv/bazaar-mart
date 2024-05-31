"use client";

import FormInputWithLabel from "@/app/_components/atoms/input/FormInputWithLabel";
import { Button } from "@/app/_components/atoms/shadcn/button";
import { Form, FormMessage } from "@/app/_components/atoms/shadcn/form";

import { LoginSchema, loginSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { login, resendConfirmationEmail } from "@/lib/actions/authAction";
import { useState } from "react";
import { RotateCw } from "lucide-react";
import Link from "next/link";

function LoginForm() {
  const [serverMessage, setServerMessage] = useState<{
    type: "error" | "success" | null;
    message: string | null;
  }>({ type: null, message: null });

  const form = useForm<LoginSchema>({
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const handleFormSubmit = async (data: LoginSchema) => {
    setServerMessage({ type: null, message: null });
    const result = await login(data);

    if (Array.isArray(result)) {
      result?.forEach((err) => {
        if ((err.type = "field-error")) {
          form.setError(err.field!, {
            message: err.message,
          });
        }
      });
    } else {
      result?.type === "server-error" &&
        setServerMessage({ type: "error", message: result.message! });
    }
  };

  const handleConfirmationEmailResend = async () => {
    const result = await resendConfirmationEmail(form.getValues("email"));

    if (result?.type === "success") {
      setServerMessage({ type: "success", message: result.message! });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleFormSubmit)}
        className="flex flex-col"
      >
        <FormInputWithLabel
          name="email"
          form={form}
          label="Email"
          placeholder="Email"
          type="email"
          isRequired={false}
          validation={{
            error: form.formState.errors.email,
            touchedField: form.formState.touchedFields.email,
          }}
        />
        <FormInputWithLabel
          name="password"
          form={form}
          label="Password"
          placeholder="Password"
          type="password"
          isRequired={false}
          validation={{
            error: form.formState.errors.password,
            touchedField: form.formState.touchedFields.password,
          }}
        />
        <FormMessage
          className={cn(
            "pl-1 pt-1 text-sm",
            serverMessage.type === "error"
              ? "text-destructive"
              : "text-success",
          )}
        >
          {serverMessage.message === "Email not confirmed" ? (
            <Button variant="link" asChild>
              <>
                Email not verified,{" "}
                <span
                  onClick={async () => await handleConfirmationEmailResend()}
                  className="text-success hover:cursor-pointer hover:underline"
                >
                  Resend Confirmation Link
                </span>
              </>
            </Button>
          ) : (
            serverMessage.message
          )}
        </FormMessage>
        <Button
          disabled={form.formState.isSubmitting}
          className="mt-2"
          type="submit"
        >
          {form.formState.isSubmitting ? (
            <div className="flex gap-1">
              <span>Logging In...</span>
              <RotateCw className=" animate-spin" />
            </div>
          ) : (
            "Login"
          )}
        </Button>
      </form>
    </Form>
  );
}
export default LoginForm;
