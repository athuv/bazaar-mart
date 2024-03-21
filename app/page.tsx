import CategoryHorizSection from "@/app/components/organisms/CategoryHorizSection";
import DeliverySelectionSection from "@/app/components/organisms/DeliverySelectionSection";
import LoginSignupSection from "@/app/components/organisms/LoginSignupSection";
import SearchSection from "@/app/components/organisms/SearchSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <SearchSection />
      <CategoryHorizSection />
      <DeliverySelectionSection />
      <LoginSignupSection />
    </main>
  );
}
