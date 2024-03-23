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
      className="mb-2 h-[25rem] w-full"
    >
      <CarouselContent>
        {slider.map((_image) => (
          <CarouselItem key={_image.id}>
            <div>
              <Card className="border-none ">
                <CardContent className="p-0">
                  <Image
                    alt={_image.alt}
                    src={_image.src}
                    width={1236}
                    height={1080}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute top-64 h-40 w-full bg-gradient-to-b from-card via-background  blur-sm"></div>
      <FeaturedScroll scroll={scroll} />
    </Carousel>
  );
}

export default FeaturedCarousel;
