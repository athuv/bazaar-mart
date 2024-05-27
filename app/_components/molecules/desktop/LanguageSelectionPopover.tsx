"use client";

import { useState } from "react";

import { Button } from "@/app/_components/atoms/shadcn/button";
import { Label } from "@/app/_components/atoms/shadcn/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_components/atoms/shadcn/popover";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/app/_components/atoms/shadcn/radio-group";
import { DESKTOP_NAV_RIGHT } from "@/lib/configs/desktopUiConfig";
import { ChevronDown, Languages } from "lucide-react";

function LanguageSelectionPopover() {
  const [openLangugae, setOpenLanguage] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  return (
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
  );
}
export default LanguageSelectionPopover;
