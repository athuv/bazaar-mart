import LogoutDesktopButton from "@/app/_components/atoms/buttons/LogoutDesktopButton";
import { Button } from "@/app/_components/atoms/shadcn/button";
import { getUser } from "@/lib/actions/authAction";
import { DESKTOP_NAV_RIGHT } from "@/lib/configs/desktopUiConfig";
import { User } from "lucide-react";
import Link from "next/link";

async function AuthButton() {
  const user = await getUser();

  return user ? (
    <LogoutDesktopButton />
  ) : (
    <Button asChild>
      <Link href="./auth">
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
