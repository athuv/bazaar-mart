import { Button } from "@/app/components/atoms/shadcn/button";
import Link from "next/link";
import React from "react";

function LoginSignup() {
  return (
    <div className="flex flex-col items-start gap-2 px-2 py-4">
      <h4 className="header-4">Sign in for the best experience</h4>
      <Button className="w-full" variant="secondary" size="lg" asChild>
        <Link href="/login-signup">Sign in</Link>
      </Button>
      <Button className="h-fit p-0" variant="link" asChild>
        <Link href="/login-signup">Create an account</Link>
      </Button>
    </div>
  );
}

export default LoginSignup;
