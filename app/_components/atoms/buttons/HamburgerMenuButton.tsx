import { Button, ButtonProps } from "@/app/_components/atoms/shadcn/button";
import { Menu } from "lucide-react";
import React from "react";

function HamburgerMenuButton({
  variant = "default",
  size = "icon",
}: ButtonProps) {
  return (
    <Button className="w-fit" aria-label="menu" variant={variant} size={size}>
      <Menu size={30} />
    </Button>
  );
}

export default HamburgerMenuButton;
