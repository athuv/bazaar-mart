"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/app/_components/atoms/shadcn/carousel";
import { Skeleton } from "@/app/_components/atoms/shadcn/skeleton";
import useProductImages from "@/app/_hooks/useProductImages";
import { getProductImages } from "@/lib/db/drizzle/queryActions";
import Image from "next/image";
import { useEffect, useState } from "react";

function MobileProductCarousel({ productId }: { productId: string }) {
  const { productImages } = useProductImages(productId);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi, productImages]);

  return (
    <div className="flex items-center">
      <Carousel
        setApi={setCarouselApi}
        opts={{ align: "start", loop: true }}
        className="h-fit w-full"
      >
        {productImages.length !== 0 && (
          <span className="absolute bottom-4 right-1/2 z-10 rounded-md bg-[rgba(0,0,0,0.6)] p-1 text-xs text-primary-foreground">
            {current}/{count}
          </span>
        )}

        <CarouselContent>
          {productImages.length === 0 && (
            <Skeleton className="h-[375px] w-full rounded-none" />
          )}
          {productImages.map((_image) => (
            <CarouselItem
              className="flex flex-col items-center justify-center"
              key={_image.productGalleryId}
            >
              <Image
                alt={_image.imageAlt}
                src={`${process.env.NEXT_PUBLIC_PRODUCT_GALLERY}/${productId}/${_image.imageUrl}`}
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
