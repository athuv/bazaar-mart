import { Button, ButtonProps } from "@/app/components/atoms/shadcn/button";
import { Search } from "lucide-react";
import React from "react";

function SearchButton({
  variant = "secondary",
  size = "default",
  className,
  type,
}: ButtonProps) {
  return (
    <Button
      className={className}
      aria-label="menu"
      variant={variant}
      size={size}
    >
      <Search size={24} />
    </Button>
  );
}

export default SearchButton;
