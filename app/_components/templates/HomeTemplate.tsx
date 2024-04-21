import HeaderDektop from "@/app/_components/organisms/desktop/HeaderDesktop";
import HeaderMobile from "@/app/_components/organisms/mobile/HeaderMobile";
import Home from "@/app/page";
import React from "react";

function HomeTemplate() {
  return (
    <>
      <header>
        <HeaderMobile />
        <HeaderDektop />
      </header>
      <div className="px-2">
        <Home />
      </div>
    </>
  );
}

export default HomeTemplate;
