import BackToTopSection from "@/app/_components/organisms/BackToTopSection";
import FeaturedCarouselSection from "@/app/_components/organisms/FeaturedCarouselSection";
import LoginSignupSection from "@/app/_components/organisms/mobile/LoginSignupSection";
import ProductListSection from "@/app/_components/organisms/mobile/ProductListSection";
import SearchSection from "@/app/_components/organisms/mobile/SearchSection";

export default function Home() {
  return (
    <main className="flex min-h-svh w-full flex-col lg:mx-auto lg:max-w-6xl xl:max-w-7xl">
      <SearchSection />
      <FeaturedCarouselSection />
      <LoginSignupSection />
      <ProductListSection />
      <BackToTopSection />
    </main>
  );
}
