import React from "react";

import DeliveryLocationAndSearchBar from "@/app/components/molecules/desktop/DeliveryLocationAndSearchBar";
import MobileLogo from "@/app/components/atoms/logo/MobileLogo";
import HeaderRightContent from "@/app/components/molecules/desktop/HeaderRightContent";

function HeaderDektop() {
  return (
    <div className="hidden h-14 items-center justify-between bg-primary px-16 text-primary-foreground lg:flex">
      <div className="flex">
        <MobileLogo />
      </div>
      <DeliveryLocationAndSearchBar />
      <HeaderRightContent />
    </div>
  );
}

export default HeaderDektop;
