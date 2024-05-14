"use client";

import FormInputWithLabel from "@/app/_components/atoms/input/FormInputWithLabel";
import { Button } from "@/app/_components/atoms/shadcn/button";
import { Form } from "@/app/_components/atoms/shadcn/form";

import { LoginSchema, loginSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

function LoginForm() {
  const form = useForm<LoginSchema>({
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const handleFormSubmit = async (data: LoginSchema) => {
    //const result = await login(data);
  };

  return (
    <div>
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
          <Button className="mt-2" type="submit">
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
}
export default LoginForm;
