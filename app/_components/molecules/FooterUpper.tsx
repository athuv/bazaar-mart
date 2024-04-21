import { Button } from "@/app/_components/atoms/shadcn/button";
import Link from "next/link";
import React from "react";

function FooterUpper() {
  return (
    <div className="flex flex-col items-start">
      <Button variant="link" className="px-0 text-primary-foreground" asChild>
        <Link href="./">Home</Link>
      </Button>
      <Button variant="link" className="px-0 text-primary-foreground" asChild>
        <Link href="./login-signin">Sign in / Register</Link>
      </Button>
      <Button variant="link" className="px-0 text-primary-foreground" asChild>
        <Link href="./sell-item">Sell an item</Link>
      </Button>
      <Button variant="link" className="px-0 text-primary-foreground" asChild>
        <Link href="./help-contact">Help & Contact</Link>
      </Button>
    </div>
  );
}

export default FooterUpper;
