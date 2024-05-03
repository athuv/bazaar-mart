"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";

import useCategories from "@/app/_hooks/useCategories";

import { Button } from "@/app/_components/atoms/shadcn/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/app/_components/atoms/shadcn/dropdown-menu";
import { Separator } from "@radix-ui/react-separator";
import { Skeleton } from "@/app/_components/atoms/shadcn/skeleton";
import { ChevronRight } from "lucide-react";
import { getChildCategoryByParentIdQuery } from "@/lib/db/drizzle/queryActions";
import { Category } from "@/lib/types/types";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_components/atoms/shadcn/avatar";

interface CategoryButtonProps {
  categoryName: string;
  categoryId: number;
  icon: string;
  setSelectedCategory: Dispatch<SetStateAction<number | null>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function CategoryButtonSkeleton() {
  return (
    <Button className="h-8 justify-start text-left text-sm" variant="ghost">
      <div className="flex w-full items-center gap-2">
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-full text-xs" />
      </div>
    </Button>
  );
}

function CategoryButton({
  categoryName,
  categoryId,
  icon,
  setSelectedCategory,
  setOpen,
}: CategoryButtonProps) {
  return (
    <Button
      onPointerDown={() => setSelectedCategory(categoryId)}
      onMouseEnter={() => {
        setSelectedCategory(categoryId);
        setOpen(true);
      }}
      className="group h-8 justify-between text-left text-sm"
      variant="ghost"
    >
      <div className="flex items-center gap-2">
        {/* <Icon className="h-4 w-4" /> */}
        <Image src={icon} alt={categoryName} height={16} width={16} />
        <span className="text-xs">{categoryName}</span>
      </div>
      <ChevronRight size={14} className="invisible group-hover:visible" />
    </Button>
  );
}

function CategoryContent({
  selectedCategory,
}: {
  selectedCategory: number | null;
}) {
  const [isSubOpen, setIsSubOpen] = useState<boolean>(false);
  const [childCategories, setChildCategories] = useState<Category[]>();
  const [subChildCategories, setSubChildCategories] = useState<Category[]>();

  useEffect(() => {
    async function fetchChildCategoryByParentId(parentId: number) {
      const childCategoriesResults = await getChildCategoryByParentIdQuery({
        parentId,
      });

      setChildCategories(childCategoriesResults);
    }

    fetchChildCategoryByParentId(selectedCategory!);
  }, [selectedCategory]);

  async function handleSubCategoryHover(parentId: number) {
    const subChildCategoryResult = await getChildCategoryByParentIdQuery({
      parentId,
    });

    setSubChildCategories(subChildCategoryResult);
  }

  return (
    <div
      className="flex h-full w-full"
      onMouseLeave={() => setIsSubOpen(false)}
    >
      <div className="min-w-48 pr-2">
        {(childCategories!?.length <= 0 || !childCategories) && (
          <div className="flex flex-col">
            {Array.from({ length: 6 }, (_, i) => (
              <Button
                key={i}
                className="h-8 justify-start text-left text-sm"
                variant="ghost"
              >
                <Skeleton className="h-5 w-48 text-xs" />
              </Button>
            ))}
          </div>
        )}
        {childCategories?.map((_childCategory) => (
          <div key={_childCategory.categoryId} className="flex pt-1">
            <Button
              className="group h-8 w-full justify-between text-left text-sm"
              variant="ghost"
              onMouseEnter={() => {
                setIsSubOpen(true);
                handleSubCategoryHover(_childCategory.categoryId);
              }}
            >
              <div className="flex items-center gap-2">
                <span className="text-xs">{_childCategory.categoryName}</span>
              </div>
              <ChevronRight
                size={14}
                className="invisible group-hover:visible"
              />
            </Button>
          </div>
        ))}
      </div>
      {/* NOTE: change below true to isSubOpen */}
      {isSubOpen && subChildCategories!?.length > 0 && (
        <>
          <Separator orientation="vertical" className="w-px bg-secondary" />
          <div className="grid auto-rows-max grid-cols-4 justify-items-center gap-2 px-2">
            {subChildCategories!?.map((_subChildCategory) => (
              <Button
                key={_subChildCategory.categoryId}
                variant="ghost"
                className="h-fit whitespace-normal px-1"
                asChild
              >
                <div className="flex h-24 w-32 flex-col items-center truncate p-1">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={
                        _subChildCategory.iconDataURL
                          ? `images/categories/${_subChildCategory.iconDataURL}`
                          : undefined
                      }
                      asChild
                      alt="@shadcn"
                    >
                      <Image
                        alt={_subChildCategory.categoryName}
                        src={
                          _subChildCategory.iconDataURL
                            ? `/images/categories/${_subChildCategory.iconDataURL}`
                            : "/images/categories/default.webp"
                        }
                        width={48}
                        height={48}
                      />
                    </AvatarImage>
                    <AvatarFallback>
                      {_subChildCategory.categoryName
                        .substring(0, 2)
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="line-clamp-2 h-full w-full text-center text-xs">
                    {_subChildCategory.categoryName}
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function CategoryListCard() {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const { mainCategories } = useCategories({ limit: 0 });

  return (
    <div
      onMouseLeave={() => setOpen(false)} // NOTE: Change to false;
      className="hidden rounded-md border lg:flex lg:min-h-[402px] lg:w-72 lg:flex-col"
    >
      {/* <h4 className="p-2 font-semibold">Categories</h4> */}

      <DropdownMenu open={open}>
        <DropdownMenuTrigger asChild>
          <div className="flex flex-col px-2 py-4 lg:py-2">
            {mainCategories.length <= 0 &&
              Array.from({ length: 12 }, (_, i) => (
                <CategoryButtonSkeleton key={i} />
              ))}
            {mainCategories.map((_category) => (
              <CategoryButton
                key={_category.categoryId}
                categoryName={_category.categoryName}
                categoryId={_category.categoryId}
                icon={_category.iconDataURL || "/"}
                setSelectedCategory={setSelectedCategory}
                setOpen={setOpen}
              />
            ))}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="right"
          align="start"
          sideOffset={0}
          alignOffset={-6}
          className="h-[410px] w-fit border-none bg-transparent shadow-none"
        >
          <div className="h-full overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md">
            <CategoryContent selectedCategory={selectedCategory} />
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default CategoryListCard;
