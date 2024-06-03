"use client";

import { SignupSchema, signupSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import { Form, FormMessage } from "@/app/_components/atoms/shadcn/form";
import { Button } from "@/app/_components/atoms/shadcn/button";
import FormInputWithLabel from "@/app/_components/atoms/input/FormInputWithLabel";
import { signup } from "@/lib/actions/authAction";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { RotateCw } from "lucide-react";

function SignupForm() {
  const [serverMessage, setServerMessage] = useState<{
    type: "error" | "success" | null;
    message: string | null;
  }>({ type: null, message: null });

  const form = useForm<SignupSchema>({
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(signupSchema),
  });

  const handleFormSubmit = async (data: SignupSchema) => {
    const result = await signup(data);

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
      result?.type === "email-sent-success" &&
        setServerMessage({ type: "success", message: result.message! });
      form.resetField("email");
      form.resetField("password");
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          className="flex flex-col"
          onSubmit={form.handleSubmit(handleFormSubmit)}
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
              "pl-1 pt-1 text-xs",
              serverMessage.type === "success" && "text-success",
            )}
          >
            {serverMessage.message}
          </FormMessage>
          <Button
            disabled={form.formState.isSubmitting}
            className="mt-2"
            type="submit"
          >
            {form.formState.isSubmitting ? (
              <div className="flex items-center justify-center gap-1">
                <span>Registering...</span>
                <RotateCw className=" animate-spin" size={16} />
              </div>
            ) : (
              "Signup"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
export default SignupForm;
