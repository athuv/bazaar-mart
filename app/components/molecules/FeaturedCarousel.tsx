import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/components/atoms/shadcn/carousel";

import { FeaturedImage } from "@/lib/types/types";
import CategoryListCard from "@/app/components/molecules/desktop/CategoryListCard";

function FeaturedCarousel({ slider }: FeaturedImage) {
  return (
    <div className="gap-2 lg:flex lg:h-fit lg:justify-center lg:px-2 lg:py-4">
      <CategoryListCard />

      <div className="flex items-center lg:rounded-md lg:bg-secondary">
        <Carousel
          opts={{ align: "start", loop: true }}
          className="lg:fit mb-2 h-fit w-full lg:mb-0"
        >
          <CarouselContent>
            {slider.map((_image) => (
              <CarouselItem className="lg:flex-grow" key={_image.id}>
                <picture>
                  <source
                    srcSet={_image.srcMobile}
                    media="(max-width: 768px)"
                  />
                  <source
                    srcSet={_image.srcDesktop}
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
