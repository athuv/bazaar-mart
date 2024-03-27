import BackToTopSection from "@/app/components/organisms/BackToTopSection";
import CategoryHorizSection from "@/app/components/organisms/CategoryHorizSection";
import DeliverySelectionSection from "@/app/components/organisms/DeliverySelectionSection";
import FeaturedCarouselSection from "@/app/components/organisms/FeaturedCarouselSection";
import LoginSignupSection from "@/app/components/organisms/LoginSignupSection";
import ProductListSection from "@/app/components/organisms/ProductListSection";
import SearchSection from "@/app/components/organisms/SearchSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <SearchSection />
      <CategoryHorizSection />
      <DeliverySelectionSection />
      <FeaturedCarouselSection />
      <LoginSignupSection />
      <ProductListSection />
      <BackToTopSection />
    </main>
  );
}
