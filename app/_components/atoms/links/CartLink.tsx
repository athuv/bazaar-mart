import { Button } from "@/app/_components/atoms/shadcn/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

function CartLink() {
  return (
    <Button aria-label="my cart items" size="icon" asChild>
      <Link href="link">
        <ShoppingCart />
      </Link>
    </Button>
  );
}

export default CartLink;
