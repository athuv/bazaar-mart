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
  const carouselImages: ResponsiveImage[] = await getSliderImagesQuery();
  // const carouselImages: ResponsiveImage[] = [];
  return (
    <div className="flex min-h-[250px] items-center lg:max-h-[402px] lg:w-full lg:rounded-md lg:bg-secondary">
      <Carousel
        opts={{ align: "start", loop: true }}
        className="lg:fit mb-2 h-fit w-full lg:mb-0"
      >
        <CarouselContent>
          {carouselImages.length <= 0 && (
            <CarouselItem className="min-h-[246px] lg:flex-grow">
              <Skeleton className="max-h-[384px] min-h-[246px] lg:h-[402px] lg:min-w-[778px] lg:max-w-[1023px]" />
            </CarouselItem>
          )}
          {carouselImages.map((_image) => (
            <CarouselItem
              className="min-h-[246px] lg:flex-grow"
              key={_image.sliderImageId}
            >
              <picture>
                <source
                  srcSet={`/images/featured/${_image.imageMobile}`}
                  media="(max-width: 768px)"
                />
                <source
                  srcSet={`/images/featured/${_image.imageDesktop}`}
                  media="(min-width: 768px)"
                />
                <Image
                  alt="image"
                  src="/images/featured/1.jpg"
                  width={1236}
                  height={1080}
                  className="h-auto  w-auto lg:rounded-sm"
                />
              </picture>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default FeaturedCarousel;
