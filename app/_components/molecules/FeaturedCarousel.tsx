import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/_components/atoms/shadcn/carousel";

import CategoryListCard from "@/app/_components/molecules/desktop/CategoryListCard";
import { getSliderImagesQuery } from "@/lib/db/drizzle/queries";
import { ResponsiveImage } from "@/lib/types/types";

async function FeaturedCarousel() {
  const carouselImages: ResponsiveImage[] = await getSliderImagesQuery();

  return (
    <div className="gap-2 lg:flex lg:h-fit lg:justify-center lg:px-2 lg:py-4">
      <CategoryListCard />

      <div className="flex items-center lg:max-h-[402px] lg:w-full lg:rounded-md lg:bg-secondary">
        <Carousel
          opts={{ align: "start", loop: true }}
          className="lg:fit mb-2 h-fit w-full lg:mb-0"
        >
          <CarouselContent>
            {carouselImages.map((_image) => (
              <CarouselItem className="lg:flex-grow" key={_image.sliderImageId}>
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
                    className="h-auto w-auto lg:rounded-sm"
                  />
                </picture>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default FeaturedCarousel;
