import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/app/components/atoms/shadcn/sheet";
import HamburgerMenuButton from "@/app/components/atoms/buttons/HamburgerMenuButton";
import { Button } from "@/app/components/atoms/shadcn/button";
import MobileLogo from "@/app/components/atoms/logo/MobileLogo";
import Link from "next/link";
import { Category } from "@/lib/types/categoryTypes";
import PopularCategories from "@/app/components/molecules/mobile/PopularCategories";
import SlideDrawerSettings from "@/app/components/molecules/mobile/SlideDrawerSettings";
import { X } from "lucide-react";

function SlideDrawerWithToggle({ categoryList }: Category) {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <HamburgerMenuButton />
        </SheetTrigger>
        <SheetContent hasClose={false} className="p-0" side="left">
          <SheetHeader className="flex flex-row items-center justify-between bg-primary p-3">
            <MobileLogo />
            <SheetClose asChild>
              <Button
                variant="secondary"
                size="icon"
                className="!mt-0 h-6 w-6 rounded-full"
              >
                <X className="h-4 w-4" />
              </Button>
            </SheetClose>
          </SheetHeader>
          <div className="flex items-center justify-center bg-primary p-3">
            <Button className="w-full" variant="secondary" asChild>
              <Link href="/login-register">Login / Regsiter</Link>
            </Button>
          </div>

          <PopularCategories categoryList={categoryList} />
          <SlideDrawerSettings />
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default SlideDrawerWithToggle;
