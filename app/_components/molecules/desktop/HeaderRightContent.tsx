"use client";

import React, { useState } from "react";
import Link from "next/link";

import { DESKTOP_NAV_RIGHT } from "@/lib/configs/desktopUiConfig";

import { Button } from "@/app/_components/atoms/shadcn/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_components/atoms/shadcn/popover";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/app/_components/atoms/shadcn/radio-group";
import { Label } from "@/app/_components/atoms/shadcn/label";
import { Badge } from "@/app/_components/atoms/shadcn/badge";

import { ChevronDown, Languages, ShoppingCart, User } from "lucide-react";

function HeaderRightContent() {
  const [openLangugae, setOpenLanguage] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  return (
    <div className="flex">
      <Popover open={openLangugae} onOpenChange={setOpenLanguage}>
        <PopoverTrigger asChild>
          <Button className="flex items-center gap-1">
            <Languages size={DESKTOP_NAV_RIGHT.ICON_SIZE} />
            <div className="flex flex-col">
              <span className="text-xs">
                {DESKTOP_NAV_RIGHT.LANGUAGE_LINK.SMALL_TEXT}
              </span>
              <div className="flex items-center gap-1">
                <span>{selectedLanguage.toUpperCase()}</span>
                <ChevronDown size={16} />
              </div>
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-fit">
          <RadioGroup defaultValue={selectedLanguage}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                onClick={(e) => {
                  const target = e.target as HTMLInputElement;
                  setSelectedLanguage(target.value);
                }}
                value="en"
                id="option-one"
              />
              <Label htmlFor="option-one">English - EN</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                onClick={(e) => {
                  const target = e.target as HTMLInputElement;
                  setSelectedLanguage(target.value);
                }}
                value="de"
                id="option-two"
              />
              <Label htmlFor="option-two">Deutsch - DE</Label>
            </div>
          </RadioGroup>
        </PopoverContent>
      </Popover>

      <Button asChild>
        <Link href="./">
          <User size={DESKTOP_NAV_RIGHT.ICON_SIZE} />
          <div className="flex flex-col">
            <span className="text-xs">
              {DESKTOP_NAV_RIGHT.AUTH_LINK.SMALL_TEXT}
            </span>
            <span>{DESKTOP_NAV_RIGHT.AUTH_LINK.TEXT}</span>
          </div>
        </Link>
      </Button>
      <Button className="flex gap-1" asChild>
        <Link href="./">
          <ShoppingCart size={DESKTOP_NAV_RIGHT.ICON_SIZE} />
          <div className="flex flex-col items-center">
            <Badge className="py-0 text-xs" variant="secondary">
              12
            </Badge>
            <span>{DESKTOP_NAV_RIGHT.CART_LINK.TEXT}</span>
          </div>
        </Link>
      </Button>
    </div>
  );
}

export default HeaderRightContent;
