import { Button } from "@/app/_components/atoms/shadcn/button";
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
      className="h-fit px-0 py-0 text-primary-foreground lg:text-secondary-foreground"
      asChild
    >
      <Link className="px-0" href={link}>
        {children}
      </Link>
    </Button>
  );
}

export default CategoryHorizLink;
