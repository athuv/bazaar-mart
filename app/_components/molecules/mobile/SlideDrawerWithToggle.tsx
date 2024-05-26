import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/app/_components/atoms/shadcn/sheet";
import HamburgerMenuButton from "@/app/_components/atoms/buttons/HamburgerMenuButton";
import { Button } from "@/app/_components/atoms/shadcn/button";
import MobileLogo from "@/app/_components/atoms/logo/MobileLogo";
import Link from "next/link";
import PopularCategories from "@/app/_components/molecules/mobile/PopularCategories";
import SlideDrawerSettings from "@/app/_components/molecules/mobile/SlideDrawerSettings";
import { X } from "lucide-react";
import { Suspense } from "react";
import { Skeleton } from "@/app/_components/atoms/shadcn/skeleton";
import LogoutButton from "@/app/_components/atoms/buttons/LogoutButton";
import { getUser } from "@/lib/actions/authAction";

function PopularCategoriesSkeleton() {
  return (
    <div className="p-3">
      <div>
        <div className="flex items-center justify-center p-0">
          <div className="flex w-full items-center justify-between gap-2">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-6 w-6" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 pt-3">
        <div className="flex items-center">
          <Skeleton className="h-10 w-12 rounded-full" />
          <Skeleton className="ml-2 h-6 w-full" />
        </div>
        <div className="flex items-center">
          <Skeleton className="h-10 w-12 rounded-full" />
          <Skeleton className="ml-2 h-6 w-full" />
        </div>
        <div className="flex items-center">
          <Skeleton className="h-10 w-12 rounded-full" />
          <Skeleton className="ml-2 h-6 w-full" />
        </div>
        <div className="flex items-center">
          <Skeleton className="h-10 w-12 rounded-full" />
          <Skeleton className="ml-2 h-6 w-full" />
        </div>
        <div className="flex items-center">
          <Skeleton className="h-10 w-12 rounded-full" />
          <Skeleton className="ml-2 h-6 w-full" />
        </div>

        <div className="flex h-6 items-center justify-center p-0">
          <Skeleton className="h-full w-20" />
        </div>
      </div>
    </div>
  );
}

async function SlideDrawerWithToggle() {
  const user = await getUser();

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
            {user ? (
              <LogoutButton />
            ) : (
              <Button className="w-full" variant="secondary" asChild>
                <SheetClose asChild>
                  <Link href="/auth">Login / Regsiter</Link>
                </SheetClose>
              </Button>
            )}
          </div>
          <Suspense fallback={<PopularCategoriesSkeleton />}>
            <PopularCategories />
          </Suspense>
          <SlideDrawerSettings />
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default SlideDrawerWithToggle;
