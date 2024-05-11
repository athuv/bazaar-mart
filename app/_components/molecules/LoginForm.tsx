"use client";

import FormInputWithLabel from "@/app/_components/atoms/input/FormInputWithLabel";
import { Button } from "@/app/_components/atoms/shadcn/button";
import { Form } from "@/app/_components/atoms/shadcn/form";
import { login } from "@/lib/actions/authAction";

import { LoginSchema, loginSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormState } from "react-dom";

import { useForm } from "react-hook-form";

function LoginForm() {
  const form = useForm<LoginSchema>({
    mode: "onTouched",
    defaultValues: {
      usernameEmail: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const [ServerValidationError, formAction] = useFormState(login, {});

  return (
    <div>
      <Form {...form}>
        <form className="flex flex-col" action={formAction}>
          <FormInputWithLabel
            name="usernameEmail"
            form={form}
            label="Username or email"
            placeholder="Username or email"
            type="text"
            isRequired={false}
            validation={{
              error: form.formState.errors.usernameEmail,
              touchedField: form.formState.touchedFields.usernameEmail,
            }}
            serverValidation={ServerValidationError.usernameEmail}
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
            serverValidation={ServerValidationError.password}
          />
          <Button className="mt-2" type="submit">
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
}
export default LoginForm;
