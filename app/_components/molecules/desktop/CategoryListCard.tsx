"use client";

import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import Image from "next/image";

import useCategories from "@/app/_hooks/useCategories";

import { Button } from "@/app/_components/atoms/shadcn/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/app/_components/atoms/shadcn/dropdown-menu";
import { Separator } from "@radix-ui/react-separator";
import { ChevronRight } from "lucide-react";

interface CategoryButtonProps {
  categoryName: string;
  categoryId: number;
  icon: string;
  setSelectedCategory: Dispatch<SetStateAction<number | null>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
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
      className="h-8 justify-start text-left text-sm"
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

function CategoryContentPopover({ children }: { children: ReactNode }) {
  const [isSubOpen, setIsSubOpen] = useState<boolean>(false);
  return (
    <div className="flex h-full w-full">
      <div
        onMouseEnter={() => {
          setIsSubOpen(true);
        }}
        className="min-w-60"
      >
        1
      </div>
      {isSubOpen && (
        <>
          <Separator orientation="vertical" className="w-px bg-secondary" />
          <div className="w-96 px-2">2</div>
        </>
      )}
    </div>
  );
}

function CategoryContent({
  selectedCategory,
}: {
  selectedCategory: number | null;
}) {
  switch (selectedCategory) {
    case 1:
      return (
        <CategoryContentPopover>{selectedCategory}</CategoryContentPopover>
      );
      break;

    case 2:
      return (
        <div className="flex">
          <div className="w-60">1</div>
          <div className="w-full">
            <Separator dir="" />2
          </div>
        </div>
      );

    case 3:
      return <div>3</div>;

    case 4:
      return <div>4</div>;

    case 5:
      return <div>5</div>;

    case 6:
      return <div>6</div>;

    case 7:
      return <div>7</div>;

    case 8:
      return <div>8</div>;

    case 9:
      return <div>9</div>;

    case 10:
      return <div>10</div>;

    case 11:
      return <div>11</div>;

    case 12:
      return <div>12</div>;

    default:
      break;
  }
}

function CategoryListCard() {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const { mainCategories } = useCategories({ limit: 0 });

  return (
    <div
      onMouseLeave={() => setOpen(false)}
      className="hidden rounded-md border lg:flex lg:min-h-[402px] lg:w-72 lg:flex-col"
    >
      {/* <h4 className="p-2 font-semibold">Categories</h4> */}

      <DropdownMenu open={open}>
        <DropdownMenuTrigger asChild>
          <div className="flex flex-col px-2 py-4 lg:py-2">
            {mainCategories.length <= 0 && <div>loading...</div>}
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
