import React from "react";

import DeliveryLocationAndSearchBar from "@/app/_components/molecules/desktop/DeliveryLocationAndSearchBar";
import MobileLogo from "@/app/_components/atoms/logo/MobileLogo";
import HeaderRightContent from "@/app/_components/molecules/desktop/HeaderRightContent";

function HeaderDektop() {
  return (
    <div className="hidden w-screen bg-primary text-primary-foreground lg:block">
      <div className="flex h-14 items-center justify-between lg:mx-auto lg:max-w-6xl lg:px-2 xl:max-w-7xl">
        <div className="flex">
          <MobileLogo />
        </div>
        <DeliveryLocationAndSearchBar />
        <HeaderRightContent />
      </div>
    </div>
  );
}

export default HeaderDektop;
