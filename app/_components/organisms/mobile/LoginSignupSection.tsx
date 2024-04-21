import { Separator } from "@/app/_components/atoms/shadcn/separator";
import LoginSignup from "@/app/_components/molecules/mobile/LoginSignup";
import React from "react";

function LoginSignupSection() {
  return (
    <section className="w-full">
      {/* <Separator /> */}
      <LoginSignup />
      <Separator />
    </section>
  );
}

export default LoginSignupSection;
