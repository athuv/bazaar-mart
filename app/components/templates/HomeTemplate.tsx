import Header from "@/app/components/organisms/Header";
import Home from "@/app/page";
import React from "react";

function HomeTemplate() {
  return (
    <>
      <Header />
      <div className="px-2">
        <Home />
      </div>
    </>
  );
}

export default HomeTemplate;
