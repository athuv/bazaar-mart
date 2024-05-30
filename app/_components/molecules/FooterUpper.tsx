import { Button } from "@/app/_components/atoms/shadcn/button";
import {
  ScrollArea,
  ScrollBar,
} from "@/app/_components/atoms/shadcn/scroll-area";
import Link from "next/link";

function FooterUpper() {
  return (
    <ScrollArea className="whitespace-nowrap">
      <div className="flex flex-row items-center justify-center gap-2">
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
      <ScrollBar className="h-1" orientation="horizontal" />
    </ScrollArea>
  );
}

export default FooterUpper;
