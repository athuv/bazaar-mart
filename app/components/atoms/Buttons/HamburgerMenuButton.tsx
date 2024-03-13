import { Button, ButtonProps } from "@/app/components/atoms/shadcn/button";
import { Menu } from "lucide-react";
import React from "react";

function HamburgerMenuButton({
  variant = "default",
  size = "icon",
}: ButtonProps) {
  return (
    <Button aria-label="menu" variant={variant} size={size}>
      <Menu size={24} />
    </Button>
  );
}

export default HamburgerMenuButton;
