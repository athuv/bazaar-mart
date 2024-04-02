"use client";

import React, { useState } from "react";
import Image from "next/image";
import MobileLogo from "@/app/components/atoms/logo/MobileLogo";
import { Button } from "@/app/components/atoms/shadcn/button";
import { Input } from "@/app/components/atoms/shadcn/input";
import { getNames, getCode } from "country-list";
import {
  CheckIcon,
  ChevronDown,
  Ellipsis,
  MapPin,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/atoms/shadcn/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/app/components/atoms/shadcn/command";
import { ScrollArea } from "@/app/components/atoms/shadcn/scroll-area";
import useDeliveryLocation from "@/app/_hooks/useDeliveryLocation";
import { cn } from "@/lib/utils";

function HeaderDektop() {
  const [open, setOpen] = useState(false);
  const { country, setCountry } = useDeliveryLocation();

  return (
    <div className="hidden h-14 items-center justify-between bg-primary text-primary-foreground md:flex md:px-8">
      <div className="flex">
        <MobileLogo />
      </div>
      <div className="flex flex-grow">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button className="py-1">
              <div>
                <MapPin size={20} />
              </div>
              <div className="flex min-w-14 flex-col items-start">
                <span className="text-xs">Deliver to</span>
                <span className="w-full truncate text-start text-sm">
                  {country.name || (
                    <Ellipsis className="animate-pulse" size={20} />
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
                                currentValue === country.name
                                  ? ""
                                  : currentValue,
                              code:
                                currentValue === country.name
                                  ? ""
                                  : getCode(currentValue) || "",
                            });
                            setOpen(false);
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
        <Button variant="secondary" className="rounded-r-none">
          All
        </Button>
        <Input className="rounded-none border-0" />
        <Button
          variant="secondary"
          className="flex-grow rounded-l-none px-2"
          size="icon"
        >
          <Search />
        </Button>
      </div>
      <div className="flex">
        <Button className="flex items-center gap-1">
          <div className="h-auto w-7">
            <Image
              alt="country"
              src={`https://flagcdn.com/us.svg`}
              width={1200}
              height={600}
            />
          </div>
          <span>EN</span>
          <ChevronDown size={16} />
        </Button>
        <Button className="flex flex-col">
          <span>Sign in &</span>
          <span>Register</span>
        </Button>
        <Button>
          <User />
          <span>Profile</span>
        </Button>
        <Button>
          <ShoppingCart />
          <span>Cart</span>
        </Button>
      </div>
    </div>
  );
}

export default HeaderDektop;
