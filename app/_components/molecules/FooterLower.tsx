import { Button } from "@/app/_components/atoms/shadcn/button";
import Link from "next/link";
import React from "react";

function FooterLower() {
  return (
    <>
      <div className="flex w-full flex-row flex-wrap items-start justify-center gap-2">
        <Button
          variant="link"
          className="h-4 px-0 text-primary-foreground"
          asChild
        >
          <Link href="./">Site map,</Link>
        </Button>
        <Button
          variant="link"
          className="h-4 px-0 text-primary-foreground"
          asChild
        >
          <Link href="./user-agreement">User Agreement,</Link>
        </Button>
        <Button
          variant="link"
          className="h-4 px-0 text-primary-foreground"
          asChild
        >
          <Link href="./privacy">Privacy,</Link>
        </Button>
        <Button
          variant="link"
          className="h-4 px-0 text-primary-foreground"
          asChild
        >
          <Link href="./cookies-adchoice">Cookies & Ad Choice,</Link>
        </Button>
      </div>
      <div className="p-4 text-center text-primary-foreground">
        &copy; 2024 Bazaar Mart Inc
      </div>
    </>
  );
}

export default FooterLower;
