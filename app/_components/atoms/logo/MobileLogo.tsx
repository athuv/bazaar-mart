import Image from "next/image";
import Link from "next/link";

function MobileLogo() {
  return (
    <Link href="/">
      <Image
        alt=""
        src="/images/logo/mobile-logo.svg"
        width={157}
        height={17}
      />
    </Link>
  );
}

export default MobileLogo;
