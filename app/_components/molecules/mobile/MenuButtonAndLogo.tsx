import MobileLogo from "@/app/_components/atoms/logo/MobileLogo";
import SlideDrawerWithToggle from "@/app/_components/molecules/mobile/SlideDrawerWithToggle";
import React from "react";

function MenuButtonAndLogo() {
  return (
    <div className="flex items-center gap-1">
      <SlideDrawerWithToggle />
      <MobileLogo />
    </div>
  );
}

export default MenuButtonAndLogo;
