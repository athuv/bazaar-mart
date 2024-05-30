import DesktopSearchBar from "@/app/_components/molecules/desktop/DesktopSearchBar";
import MobileLogo from "@/app/_components/atoms/logo/MobileLogo";
import LanguageSelectionPopover from "@/app/_components/molecules/desktop/LanguageSelectionPopover";
import CartButton from "@/app/_components/molecules/desktop/CartButton";
import AuthButton from "@/app/_components/molecules/desktop/AuthButton";

function HeaderDektop() {
  return (
    <div className="hidden h-14 w-full bg-primary text-primary-foreground lg:block">
      <div className="flex h-14 items-center justify-between lg:mx-auto lg:max-w-6xl lg:px-2 xl:max-w-7xl">
        <div className="flex min-w-52">
          <MobileLogo />
        </div>
        <DesktopSearchBar />
        <div className="flex">
          <LanguageSelectionPopover />
          <AuthButton />
          <CartButton />
        </div>
      </div>
    </div>
  );
}

export default HeaderDektop;
