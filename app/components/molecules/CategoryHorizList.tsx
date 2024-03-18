import React from "react";

import CategoryHorizLink from "@/app/components/atoms/links/CategoryHorizLink";
import {
  ScrollArea,
  ScrollBar,
} from "@/app/components/atoms/shadcn/scroll-area";
import { Category } from "@/lib/types/categoryTypes";

function CategoryHorizList({ categoryList }: Category) {
  return (
    <ScrollArea>
      <div className="flex h-fit flex-grow gap-3 px-2 py-2 pb-[0.85rem]">
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
