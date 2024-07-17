import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/_components/atoms/shadcn/carousel";
import { getProductImages } from "@/lib/db/drizzle/queryActions";
import Image from "next/image";

async function MobileProductCarousel({ productId }: { productId: string }) {
  const productGallery = await getProductImages(productId);

  return (
    <div className="flex items-center">
      <Carousel opts={{ align: "start", loop: true }} className="h-fit w-full">
        <CarouselContent>
          {productGallery.map((_image) => (
            <CarouselItem key={_image.productGalleryId}>
              <Image
                alt={_image.imageAlt}
                src={`${process.env.PRODUCT_GALLERY}/${productId}/${_image.imageUrl}`}
                width={750}
                height={750}
                className="object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
export default MobileProductCarousel;
