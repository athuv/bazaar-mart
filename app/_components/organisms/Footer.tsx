import { Button } from "@/app/_components/atoms/shadcn/button";
import { Separator } from "@/app/_components/atoms/shadcn/separator";
import FooterLower from "@/app/_components/molecules/FooterLower";
import FooterUpper from "@/app/_components/molecules/FooterUpper";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-primary px-2 py-2">
      <section className="w-full">
        <FooterUpper />
      </section>
      <Separator orientation="horizontal" className="my-4" />
      <section className="w-full">
        <FooterLower />
      </section>
    </footer>
  );
}

export default Footer;
