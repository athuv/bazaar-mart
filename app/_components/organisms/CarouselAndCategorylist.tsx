import FeaturedCarousel from "@/app/_components/molecules/FeaturedCarousel";
import CategoryListCard from "@/app/_components/molecules/desktop/CategoryListCard";

async function CarouselAndCategorylist() {
  return (
    <section className="w-full">
      <div className="gap-2 lg:flex lg:max-h-[435px] lg:justify-center lg:px-2 lg:py-4">
        <CategoryListCard />
        <FeaturedCarousel />
      </div>
    </section>
  );
}

export default CarouselAndCategorylist;
