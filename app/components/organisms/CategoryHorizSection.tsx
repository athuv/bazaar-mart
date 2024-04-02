import CategoryHorizList from "@/app/components/molecules/CategoryHorizList";
import React from "react";
import categories from "@/lib/data/categories.json";

function CategoryHorizSection() {
  return (
    <section className="flex w-screen bg-primary md:bg-secondary md:px-8">
      <CategoryHorizList categoryList={categories} />
    </section>
  );
}

export default CategoryHorizSection;
