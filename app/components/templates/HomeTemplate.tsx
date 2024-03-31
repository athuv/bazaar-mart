import HeaderDektop from "@/app/components/organisms/HeaderDektop";
import HeaderMobile from "@/app/components/organisms/HeaderMobile";
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
