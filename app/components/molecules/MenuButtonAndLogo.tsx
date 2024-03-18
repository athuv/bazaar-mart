import HamburgerMenuButton from "@/app/components/atoms/buttons/HamburgerMenuButton";
import MobileLogo from "@/app/components/atoms/logo/MobileLogo";
import React from "react";

function MenuButtonAndLogo() {
  return (
    <div className="flex items-center gap-1">
      <HamburgerMenuButton />
      <MobileLogo />
    </div>
  );
}

export default MenuButtonAndLogo;
