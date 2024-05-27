import { Badge } from "@/app/_components/atoms/shadcn/badge";
import { Button } from "@/app/_components/atoms/shadcn/button";
import { DESKTOP_NAV_RIGHT } from "@/lib/configs/desktopUiConfig";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

function CartButton() {
  return (
    <Button className="flex gap-1" asChild>
      <Link href="./">
        <ShoppingCart size={DESKTOP_NAV_RIGHT.ICON_SIZE} />
        <div className="flex flex-col items-center">
          <Badge className="py-0 text-xs" variant="secondary">
            12
          </Badge>
          <span>{DESKTOP_NAV_RIGHT.CART_LINK.TEXT}</span>
        </div>
      </Link>
    </Button>
  );
}
export default CartButton;
