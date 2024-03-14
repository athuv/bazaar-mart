import DeliveredToSection from "@/app/components/organisms/DeliveredToSection";
import SearchSection from "@/app/components/organisms/SearchSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <SearchSection />
      <DeliveredToSection />
    </main>
  );
}
