import BackToTopSection from "@/app/components/organisms/BackToTopSection";
import CategoryHorizSection from "@/app/components/organisms/CategoryHorizSection";
import FeaturedCarouselSection from "@/app/components/organisms/FeaturedCarouselSection";
import LoginSignupSection from "@/app/components/organisms/mobile/LoginSignupSection";
import ProductListSection from "@/app/components/organisms/mobile/ProductListSection";
import SearchSection from "@/app/components/organisms/mobile/SearchSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <SearchSection />
      <CategoryHorizSection />
      <FeaturedCarouselSection />
      <LoginSignupSection />
      <ProductListSection />
      <BackToTopSection />
    </main>
  );
}
