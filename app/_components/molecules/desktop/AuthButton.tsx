import LogoutDesktopButton from "@/app/_components/atoms/buttons/LogoutDesktopButton";
import { Button } from "@/app/_components/atoms/shadcn/button";
import { createClient } from "@/lib/db/supabase/server";
import { DESKTOP_NAV_RIGHT } from "@/lib/configs/desktopUiConfig";
import { User } from "lucide-react";
import Link from "next/link";

async function AuthButton() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <LogoutDesktopButton />
  ) : (
    <Button asChild>
      <Link href="/auth">
        <User size={DESKTOP_NAV_RIGHT.ICON_SIZE} />
        <div className="flex flex-col">
          <span className="text-xs">
            {DESKTOP_NAV_RIGHT.AUTH_LINK.SMALL_TEXT}
          </span>
          <span>{DESKTOP_NAV_RIGHT.AUTH_LINK.TEXT}</span>
        </div>
      </Link>
    </Button>
  );
}
export default AuthButton;
