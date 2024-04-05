import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/components/atoms/shadcn/carousel";
import { Card, CardContent } from "@/app/components/atoms/shadcn/card";
import { FeaturedImage } from "@/lib/types/types";
import Image from "next/image";
import FeaturedScroll from "@/app/components/molecules/FeaturedScroll";

function FeaturedCarousel({ slider, scroll }: FeaturedImage) {
  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      className="mb-2 h-fit w-full lg:px-16"
    >
      <CarouselContent>
        {slider.map((_image) => (
          <CarouselItem key={_image.id}>
            <picture>
              <source srcSet={_image.srcMobile} media="(max-width: 768px)" />
              <source srcSet={_image.srcDesktop} media="(min-width: 768px)" />
              <Image
                alt="image"
                src="/images/featured/1.jpg"
                width={1236}
                height={1080}
                style={{ width: "100%" }}
              />
            </picture>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* <div className="absolute top-64 h-40 w-full bg-gradient-to-b from-card via-background  blur-sm"></div>
       <FeaturedScroll scroll={scroll} /> */}
    </Carousel>
  );
}

export default FeaturedCarousel;
