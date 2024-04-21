import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_components/atoms/shadcn/avatar";
import { Button } from "@/app/_components/atoms/shadcn/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Category } from "@/lib/types/categoryTypes";

function PopularCategories({ categoryList }: Category) {
  return (
    <div className="p-3">
      <div>
        <Button variant="link" className="p-0" asChild>
          <Link
            className="flex w-full items-center justify-between"
            href="/categories/popular"
          >
            <h1 className="header-4 text-foreground">Popular Categories</h1>
            <ChevronRight />
          </Link>
        </Button>
      </div>
      <div className="flex flex-col gap-2 pt-3">
        {categoryList.map((_category) => {
          return (
            <div key={_category.id} className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src={_category.imgSrc} asChild>
                  <Image
                    src={_category.imgSrc}
                    height={289}
                    width={289}
                    alt={_category.category}
                  />
                </AvatarImage>
                <AvatarFallback>
                  {_category.category.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span>{_category.category}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PopularCategories;
