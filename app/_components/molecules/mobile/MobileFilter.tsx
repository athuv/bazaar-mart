"use client";

import { Button } from "@/app/_components/atoms/shadcn/button";
import {
  ScrollArea,
  ScrollBar,
} from "@/app/_components/atoms/shadcn/scroll-area";
import { Badge } from "@/app/_components/atoms/shadcn/badge";
import { ChevronDown, X } from "lucide-react";
import { Separator } from "@/app/_components/atoms/shadcn/separator";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/app/_components/atoms/shadcn/drawer";

function MobileFilter() {
  return (
    <div className="flex h-14 items-center justify-between border-b px-1">
      <ScrollArea className="whitespace-nowrap">
        <div className="flex flex-row gap-1 pb-3 pr-1 pt-2">
          <Badge variant="outline" className="flex gap-1 p-2">
            <span>Badge</span>
            <Button
              className="h-auto w-fit cursor-pointer p-1"
              size="icon"
              asChild
            >
              <X size={10} />
            </Button>
          </Badge>
          <Badge variant="outline" className="flex gap-1 p-2">
            <span>Badge</span>
            <Button
              className="h-auto w-fit cursor-pointer p-1"
              size="icon"
              asChild
            >
              <X size={10} />
            </Button>
          </Badge>
          <Badge variant="outline" className="flex gap-1 p-2">
            <span>Badge</span>
            <Button
              className="h-auto w-fit cursor-pointer p-1"
              size="icon"
              asChild
            >
              <X size={10} />
            </Button>
          </Badge>
          <Badge variant="outline" className="flex gap-1 p-2">
            <span>Badge</span>
            <Button
              className="h-auto w-fit cursor-pointer p-1"
              size="icon"
              asChild
            >
              <X size={10} />
            </Button>
          </Badge>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <Separator orientation="vertical" className="" />
      <div>
        <Drawer>
          <DrawerTrigger asChild>
            <Button
              variant="link"
              className="flex items-center justify-center gap-1 px-1"
            >
              <span>Filter</span>
              <ChevronDown size={16} />
            </Button>
          </DrawerTrigger>
          <DrawerContent>asd</DrawerContent>
        </Drawer>
        {/* <Button
          variant="link"
          className="flex items-center justify-center gap-1 px-1"
        >
          <span>Filter</span>
          <ChevronDown size={16} />
        </Button> */}
      </div>
    </div>
  );
}
export default MobileFilter;
