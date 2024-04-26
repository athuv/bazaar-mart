import BackToTopSection from "@/app/_components/organisms/BackToTopSection";
import CarouselAndCategorylist from "@/app/_components/organisms/CarouselAndCategorylist";
import LoginSignupSection from "@/app/_components/organisms/mobile/LoginSignupSection";
import ProductListSection from "@/app/_components/organisms/mobile/ProductListSection";
import SearchSection from "@/app/_components/organisms/mobile/SearchSection";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-grow flex-col lg:mx-auto lg:max-w-6xl xl:max-w-7xl">
      <SearchSection />
      <CarouselAndCategorylist />
      <LoginSignupSection />
      <ProductListSection />
      <BackToTopSection />
    </main>
  );
}
