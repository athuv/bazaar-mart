import React from "react";
import { Input } from "@/app/components/atoms/shadcn/input";
import SearchButton from "@/app/components/atoms/buttons/SearchButton";
import search from "@/lib/actions/submitSearchForm";

function SearchInputAndButton() {
  return (
    <form action={search}>
      <div className="flex px-2 py-2">
        <Input
          className="rounded-r-none border-r-0"
          aria-label="type search keyword"
          type="text"
          name="keyword"
        />
        <SearchButton type="submit" className="rounded-l-none border-l-0" />
      </div>
    </form>
  );
}

export default SearchInputAndButton;
