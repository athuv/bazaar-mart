import MobileProductCarousel from "@/app/_components/organisms/mobile/MobileProductCarousel";
import SearchSection from "@/app/_components/organisms/mobile/SearchSection";

function page({ params }: { params: { id: string } }) {
  return (
    <main className="flex-grow lg:mx-auto lg:max-w-6xl xl:max-w-7xl">
      <SearchSection />
      <MobileProductCarousel productId={params.id} />
      <div className="px-4 pt-2">
        <h3 className="header-4 text-opacity-50">sasdfasdf</h3>
        <div className="flex flex-row">
          <span>3000</span>
          <span>234</span>
          <span>-32%</span>
        </div>
      </div>
      <span>UNDER DEVELOPMENT</span>
    </main>
  );
}
export default page;
