"use client";

import {
  Dispatch,
  ElementType,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

import { Button } from "@/app/_components/atoms/shadcn/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/app/_components/atoms/shadcn/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_components/atoms/shadcn/popover";

import {
  Baby,
  Bike,
  Car,
  ChevronRight,
  Gem,
  HeartPulse,
  MonitorSmartphone,
  Plug2,
  Refrigerator,
  Shirt,
  ShoppingBasket,
  Sofa,
  Watch,
} from "lucide-react";
import Link from "next/link";
import { Separator } from "@radix-ui/react-separator";

interface CategoryButtonProps {
  categoryName: string;
  categoryId: number;
  icon: ElementType;
  setSelectedCategory: Dispatch<SetStateAction<number | null>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface CategoriesProps {
  id: number;
  name: string;
  icon: ElementType;
}

const categories: CategoriesProps[] = [
  { id: 1, name: "Electronic Accessories", icon: Plug2 },
  { id: 2, name: "Electronic Devices", icon: MonitorSmartphone },
  { id: 3, name: "TV & Home Appliances", icon: Refrigerator },
  { id: 4, name: "Health & Beauty", icon: HeartPulse },
  { id: 5, name: "Babies & Toys", icon: Baby },
  { id: 6, name: "Groceries & Pets", icon: ShoppingBasket },
  { id: 7, name: "Home & Lifestyle", icon: Sofa },
  { id: 8, name: "Women's Fashion", icon: Gem },
  { id: 9, name: "Men's Fashion", icon: Shirt },
  { id: 10, name: "Watches & Accessories", icon: Watch },
  { id: 11, name: "Sports & Outdoor", icon: Car },
  { id: 12, name: "Automotive & Motorbike", icon: Bike },
];

function CategoryButton({
  categoryName,
  categoryId,
  icon: Icon,
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
        <Icon className="h-4 w-4" />
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

  return (
    <div
      onMouseLeave={() => setOpen(false)}
      className="hidden rounded-md border lg:flex lg:h-auto lg:w-72 lg:flex-col"
    >
      {/* <h4 className="p-2 font-semibold">Categories</h4> */}

      <DropdownMenu open={open}>
        <DropdownMenuTrigger asChild>
          <div className="flex flex-col px-2 py-4 lg:py-2">
            {categories.map((_category) => (
              <CategoryButton
                key={_category.id}
                categoryName={_category.name}
                categoryId={_category.id}
                icon={_category.icon}
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
