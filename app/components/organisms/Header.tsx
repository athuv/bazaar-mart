import MenuButtonAndLogo from "@/app/components/molecules/MenuButtonAndLogo";
import ProfileAndCartLink from "@/app/components/molecules/ProfileAndCartLink";
import React from "react";

function Header() {
  return (
    <header className="bg-primary px-2 py-2">
      <div className="flex justify-between">
        <MenuButtonAndLogo />
        <ProfileAndCartLink />
      </div>
    </header>
  );
}

export default Header;
