import React from "react";

import CategoryHorizLink from "@/app/components/atoms/links/CategoryHorizLink";
import {
  ScrollArea,
  ScrollBar,
} from "@/app/components/atoms/shadcn/scroll-area";
import { Category } from "@/lib/types/categoryTypes";
import { Button } from "@/app/components/atoms/shadcn/button";
import { Menu } from "lucide-react";

function CategoryHorizList({ categoryList }: Category) {
  return (
    <ScrollArea>
      <div className="flex h-fit flex-grow items-center gap-3 px-2 py-2 pb-[0.85rem] lg:px-16 lg:py-1">
        <div className="hidden lg:block">
          <Button
            className="flex h-fit w-fit items-center gap-1 px-1"
            variant="ghost"
            size="icon"
          >
            <Menu size={18} />
            <span>All</span>
          </Button>
        </div>
        {categoryList.map((_category) => (
          <CategoryHorizLink link={_category.link} key={_category.id}>
            {_category.category}
          </CategoryHorizLink>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

export default CategoryHorizList;
