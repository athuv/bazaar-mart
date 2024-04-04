import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/app/components/atoms/shadcn/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/app/components/atoms/shadcn/command";
import { Input } from "@/app/components/atoms/shadcn/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/atoms/shadcn/popover";
import { ScrollArea } from "@/app/components/atoms/shadcn/scroll-area";
import { CheckIcon, Ellipsis, MapPin, Search } from "lucide-react";
import { getNames, getCode } from "country-list";
import useDeliveryLocation from "@/app/_hooks/useDeliveryLocation";
import { DELIVERY_LOCATION_AND_SEARCHBAR } from "@/lib/configs/desktopUiConfig";
import { cn } from "@/lib/utils";

function DeliveryLocationAndSearchBar() {
  const [openLocation, setOpenLocation] = useState(false);
  const { country, setCountry } = useDeliveryLocation();
  return (
    <div className="flex flex-grow">
      <Popover open={openLocation} onOpenChange={setOpenLocation}>
        <PopoverTrigger asChild>
          <Button className="max-w-80 items-center justify-end gap-1 py-1">
            <div className="flex flex-col items-end">
              <div className="flex gap-1">
                <MapPin size={18} />
                <span className="text-xs">
                  {
                    DELIVERY_LOCATION_AND_SEARCHBAR.DELIVERY_SELECTION_BUTTON_TEXT
                  }
                </span>
              </div>

              <span className="max-w-72 truncate text-end text-sm">
                {country.name || (
                  <Ellipsis
                    className="animate-pulse"
                    size={
                      DELIVERY_LOCATION_AND_SEARCHBAR.DELIVERY_SELECTION_BUTTON_ICON_SIZE
                    }
                  />
                )}
              </span>
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Command>
            <CommandInput placeholder="Search Country..." className="h-9" />
            <CommandEmpty>No Country found.</CommandEmpty>
            <ScrollArea>
              <CommandList className="overflow-x-visible overflow-y-visible">
                <CommandGroup>
                  {getNames()
                    .sort()
                    .map((_country) => (
                      <CommandItem
                        key={getCode(_country)}
                        value={_country}
                        onSelect={(currentValue) => {
                          setCountry({
                            name:
                              currentValue === country.name ? "" : currentValue,
                            code:
                              currentValue === country.name
                                ? ""
                                : getCode(currentValue) || "",
                          });
                          setOpenLocation(false);
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <div className="h-auto w-5">
                            <Image
                              alt="country"
                              src={`https://flagcdn.com/${getCode(_country)!.toLowerCase()}.svg`}
                              width={1200}
                              height={600}
                            />
                          </div>
                          {_country}
                        </div>

                        <CheckIcon
                          className={cn(
                            "ml-auto h-4 w-4",
                            country.name === _country
                              ? "opacity-100"
                              : "opacity-0",
                          )}
                        />
                      </CommandItem>
                    ))}
                </CommandGroup>
              </CommandList>
            </ScrollArea>
          </Command>
        </PopoverContent>
      </Popover>
      <div className="flex flex-grow">
        <Button variant="secondary" className="rounded-r-none">
          {DELIVERY_LOCATION_AND_SEARCHBAR.SEARCHBAR_BUTTON_TEXT}
        </Button>
        <Input aria-label="search keyword" className="rounded-none border-0" />
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

export default DeliveryLocationAndSearchBar;
