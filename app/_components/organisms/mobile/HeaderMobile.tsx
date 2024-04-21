import MenuButtonAndLogo from "@/app/_components/molecules/mobile/MenuButtonAndLogo";
import ProfileAndCartLink from "@/app/_components/molecules/mobile/ProfileAndCartLink";
import React from "react";

function Header() {
  return (
    <div className="bg-primary px-2 lg:hidden">
      <div className="flex justify-between">
        <MenuButtonAndLogo />
        <ProfileAndCartLink />
      </div>
    </div>
  );
}

export default Header;
