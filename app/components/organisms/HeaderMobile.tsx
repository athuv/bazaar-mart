import MenuButtonAndLogo from "@/app/components/molecules/MenuButtonAndLogo";
import ProfileAndCartLink from "@/app/components/molecules/ProfileAndCartLink";
import React from "react";

async function Header() {
  return (
    <div className="bg-primary px-2 md:hidden">
      <div className="flex justify-between">
        <MenuButtonAndLogo />
        <ProfileAndCartLink />
      </div>
    </div>
  );
}

export default Header;
