"use client";

import { Button } from "@/app/_components/atoms/shadcn/button";
import { SheetClose } from "@/app/_components/atoms/shadcn/sheet";
import { logout } from "@/lib/actions/authAction";

function LogoutMobileButton() {
  return (
    <form className="w-full" action={() => logout()}>
      <Button type="submit" className="w-full" variant="secondary" asChild>
        <SheetClose>Logout</SheetClose>
      </Button>
    </form>
  );
}
export default LogoutMobileButton;
