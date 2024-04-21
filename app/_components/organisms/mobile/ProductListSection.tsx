import ProductList from "@/app/_components/molecules/mobile/ProductList";
import React from "react";
import productList from "@/lib/data/productList.json";

function ProductListSection() {
  return (
    <section className="w-full">
      <ProductList productList={productList} />
    </section>
  );
}

export default ProductListSection;
