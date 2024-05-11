"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { SEARCHBAR } from "@/lib/configs/desktopUiConfig";

import { Button } from "@/app/_components/atoms/shadcn/button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/app/_components/atoms/shadcn/command";
import { Input } from "@/app/_components/atoms/shadcn/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_components/atoms/shadcn/popover";
import { ScrollArea } from "@/app/_components/atoms/shadcn/scroll-area";

import { CheckIcon, ChevronDown, Search } from "lucide-react";
import { useCategoriesStore } from "@/lib/stores/useCategoriesStore";

const { SEARCHBAR_BUTTON_TEXT } = SEARCHBAR;

function DesktopSearchBar() {
  const [openCategory, setOpenCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const fetchMainCategories = useCategoriesStore(
    (state) => state.fetchMainCategories,
  );
  const mainCategories = useCategoriesStore((state) => state.mainCategories);

  useEffect(() => {
    fetchMainCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-grow">
      <div className="flex flex-grow">
        <Popover open={openCategory} onOpenChange={setOpenCategory}>
          <PopoverTrigger asChild>
            <Button
              variant="secondary"
              className="flex items-center gap-1 rounded-r-none"
            >
              {/* All */}
              <span>
                {!selectedCategory ? SEARCHBAR_BUTTON_TEXT : selectedCategory}
              </span>
              <ChevronDown size={16} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-fit">
            <Command>
              <ScrollArea>
                <CommandList className="overflow-x-visible overflow-y-visible">
                  <CommandGroup>
                    {mainCategories.map((_category) => {
                      return (
                        <CommandItem
                          value={_category.categoryName}
                          onSelect={(currentValue) => {
                            setSelectedCategory(currentValue);
                            setOpenCategory(false);
                          }}
                          key={_category.categoryId}
                        >
                          <div className="flex items-center gap-2">
                            {_category.categoryName}
                          </div>
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              selectedCategory === _category.categoryName
                                ? "opacity-100"
                                : "opacity-0",
                            )}
                          />
                        </CommandItem>
                      );
                    })}
                  </CommandGroup>
                </CommandList>
              </ScrollArea>
            </Command>
          </PopoverContent>
        </Popover>

        <Input
          aria-label="search keyword"
          type="text"
          name="keyword"
          className="rounded-none border-0 text-foreground"
        />
        <Button
          variant="secondary"
          className="flex-grow rounded-l-none px-2"
          size="icon"
          aria-label="search"
        >
          <Search />
        </Button>
      </div>
    </div>
  );
}

export default DesktopSearchBar;
