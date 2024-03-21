import MobileLogo from "@/app/components/atoms/logo/MobileLogo";
import SlideDrawerWithToggle from "@/app/components/molecules/SlideDrawerWithToggle";
import categories from "@/lib/data/categories.json";
import React from "react";

function MenuButtonAndLogo() {
  return (
    <div className="flex items-center gap-1">
      <SlideDrawerWithToggle categoryList={categories} />
      <MobileLogo />
    </div>
  );
}

export default MenuButtonAndLogo;
