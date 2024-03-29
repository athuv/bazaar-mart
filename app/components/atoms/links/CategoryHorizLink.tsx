import { Button } from "@/app/components/atoms/shadcn/button";
import Link from "next/link";
import React, { ReactNode } from "react";

function CategoryHorizLink({
  children,
  link,
}: {
  children: ReactNode;
  link: string;
}) {
  return (
    <Button
      variant="link"
      className="h-fit px-0 py-0 text-primary-foreground"
      asChild
    >
      <Link className="px-0" href={link}>
        {children}
      </Link>
    </Button>
  );
}

export default CategoryHorizLink;
