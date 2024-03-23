import React from "react";
import Image from "next/image";
import {
  ScrollArea,
  ScrollBar,
} from "@/app/components/atoms/shadcn/scroll-area";
import { Card } from "@/app/components/atoms/shadcn/card";
import { ScrollImage } from "@/lib/types/types";

function FeaturedScroll({ scroll }: ScrollImage) {
  return (
    <ScrollArea className="bottom-16 overflow-hidden">
      <div className="flex gap-2 px-2">
        {scroll.map((_image) => (
          <Card
            key={_image.id}
            className="h-[180px] w-[135px] rounded-md border-none bg-slate-500"
          >
            <Image
              src={_image.src}
              alt={_image.alt}
              width={270}
              height={360}
              className="rounded-md"
            />
          </Card>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

export default FeaturedScroll;
