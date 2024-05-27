"use client";

import { Button } from "@/app/_components/atoms/shadcn/button";
import { logout } from "@/lib/actions/authAction";
import { DESKTOP_NAV_RIGHT } from "@/lib/configs/desktopUiConfig";
import { LogOut } from "lucide-react";

function LogoutDesktopButton() {
  return (
    <form action={async () => await logout()}>
      <Button type="submit">
        <LogOut size={DESKTOP_NAV_RIGHT.ICON_SIZE} />
        <div className="flex flex-col gap-1">
          <span>{DESKTOP_NAV_RIGHT.AUTH_LINK_LOGOUT.TEXT}</span>
        </div>
      </Button>
    </form>
  );
}
export default LogoutDesktopButton;
