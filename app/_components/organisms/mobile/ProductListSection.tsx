import ProductList from "@/app/_components/molecules/mobile/ProductList";
import React from "react";

function ProductListSection() {
  return (
    <section className="w-full">
      <h2 className="pl-4 pt-2 text-2xl font-semibold">Available Products</h2>
      <ProductList />
    </section>
  );
}

export default ProductListSection;
