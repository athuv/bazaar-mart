import { Separator } from "@/app/components/atoms/shadcn/separator";
import LoginSignup from "@/app/components/molecules/LoginSignup";
import React from "react";

function LoginSignupSection() {
  return (
    <section className="w-screen">
      <Separator />
      <LoginSignup />
      <Separator />
    </section>
  );
}

export default LoginSignupSection;
