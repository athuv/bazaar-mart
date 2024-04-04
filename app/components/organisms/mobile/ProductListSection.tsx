import ProductList from "@/app/components/molecules/mobile/ProductList";
import React from "react";
import productList from "@/lib/data/productList.json";

function ProductListSection() {
  return (
    <section className="w-screen">
      <ProductList productList={productList} />
    </section>
  );
}

export default ProductListSection;
