import CategoryHorizList from "@/app/components/molecules/CategoryHorizList";
import React from "react";
import categories from "@/lib/data/categories.json";

function CategoryHorizSection() {
  return (
    <section className="flex w-screen bg-primary lg:bg-secondary">
      <CategoryHorizList categoryList={categories} />
    </section>
  );
}

export default CategoryHorizSection;
