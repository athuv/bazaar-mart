import SearchInputAndButton from "@/app/components/molecules/mobile/SearchInputAndButton";
import React from "react";

function SearchSection() {
  return (
    <section className="w-screen bg-primary lg:hidden">
      <SearchInputAndButton />
    </section>
  );
}

export default SearchSection;
