import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/_components/atoms/shadcn/carousel";

import { getSliderImagesQuery } from "@/lib/db/drizzle/queryActions";
import { ResponsiveImage } from "@/lib/types/types";
import { Skeleton } from "@/app/_components/atoms/shadcn/skeleton";

async function FeaturedCarousel() {
  // const carouselImages: ResponsiveImage[] = await getSliderImagesQuery();
  const carouselImages: ResponsiveImage[] = [];
  return (
    <div className="flex items-center lg:max-h-[402px] lg:w-full lg:rounded-md lg:bg-secondary">
      <Carousel
        opts={{ align: "start", loop: true }}
        className="lg:fit mb-2 h-fit w-full lg:mb-0"
      >
        <CarouselContent>
          {carouselImages.length <= 0 && (
            <CarouselItem className="lg:flex-grow">
              <Skeleton className="">
                <Image
                  alt="image"
                  src="/images/slider-images/default-min-768px.webp"
                  width={768}
                  height={504}
                  className="object-contain md:hidden"
                />
                <Image
                  alt="image"
                  src="/images/slider-images/default-max-768px.webp"
                  width={1023}
                  height={375}
                  className="hidden object-contain md:inline lg:rounded-sm"
                />
              </Skeleton>
            </CarouselItem>
          )}
          {carouselImages.map((_image) => (
            <CarouselItem className="lg:flex-grow" key={_image.sliderImageId}>
              <Image
                alt={_image.imageAlt!}
                src={`/images/slider-images/${_image.imageMobile}`}
                width={768}
                height={503}
                className="object-contain md:hidden"
              />
              <Image
                alt={_image.imageAlt!}
                src={`/images/slider-images/${_image.imageDesktop}`}
                width={1023}
                height={375}
                className="hidden object-contain md:inline lg:rounded-sm"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default FeaturedCarousel;
