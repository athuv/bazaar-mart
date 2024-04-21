import CategoryHorizList from "@/app/_components/molecules/CategoryHorizList";
import React from "react";
import categories from "@/lib/data/categories.json";

function CategoryHorizSection() {
  return (
    <section className="flex w-full bg-primary lg:hidden">
      <CategoryHorizList categoryList={categories} />
    </section>
  );
}

export default CategoryHorizSection;
