import React from "react";
import featuredImages from "@/lib/data/featuredImages.json";
import FeaturedCarousel from "@/app/components/molecules/FeaturedCarousel";

function FeaturedCarouselSection() {
  return (
    <section className="w-screen">
      <FeaturedCarousel
        slider={featuredImages.slider}
        scroll={featuredImages.scroll}
      />
    </section>
  );
}

export default FeaturedCarouselSection;
