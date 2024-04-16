import BackToTopSection from "@/app/components/organisms/BackToTopSection";
import CategoryHorizSection from "@/app/components/organisms/CategoryHorizSection";
import FeaturedCarouselSection from "@/app/components/organisms/FeaturedCarouselSection";
import LoginSignupSection from "@/app/components/organisms/mobile/LoginSignupSection";
import ProductListSection from "@/app/components/organisms/mobile/ProductListSection";
import SearchSection from "@/app/components/organisms/mobile/SearchSection";

export default function Home() {
  return (
    <main className="flex min-h-svh w-full flex-col lg:mx-auto lg:max-w-6xl xl:max-w-7xl">
      <SearchSection />
      <CategoryHorizSection />
      <FeaturedCarouselSection />
      <LoginSignupSection />
      <ProductListSection />
      <BackToTopSection />
    </main>
    // <main className="flex min-h-screen w-svw flex-col items-center ">
    //   <SearchSection />
    //   <CategoryHorizSection />
    //   <FeaturedCarouselSection />
    //   <LoginSignupSection />
    //   <ProductListSection />
    //   <BackToTopSection />
    // </main>
  );
}
