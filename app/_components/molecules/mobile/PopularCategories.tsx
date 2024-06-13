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
import { Category } from "@/lib/types/types";
import { getMainCategories } from "@/lib/db/drizzle/queryActions";

async function PopularCategories() {
  const mainCategories: Category[] = await getMainCategories({ limit: 5 });

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
        {mainCategories.map((_category) => {
          return (
            <div key={_category.categoryId} className="flex items-center gap-2">
              <Avatar className="bg-secondary">
                <AvatarImage
                  src={_category.iconDataUrl || undefined}
                  asChild
                  className="p-2"
                >
                  <Image
                    src={_category.iconDataUrl || "/"}
                    height={24}
                    width={24}
                    alt={_category.categoryName}
                  />
                </AvatarImage>
                <AvatarFallback>
                  {_category.categoryName.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span>{_category.categoryName}</span>
            </div>
          );
        })}
        <Button variant="link" className="h-6 p-0">
          See More...
        </Button>
      </div>
    </div>
  );
}

export default PopularCategories;
