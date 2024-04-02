import SearchInputAndButton from "@/app/components/molecules/SearchInputAndButton";
import React from "react";

function SearchSection() {
  return (
    <section className="w-screen bg-primary md:hidden">
      <SearchInputAndButton />
    </section>
  );
}

export default SearchSection;
