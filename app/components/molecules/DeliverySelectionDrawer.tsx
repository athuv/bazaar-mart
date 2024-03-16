"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/app/components/atoms/shadcn/button";
import { CircleX, MapPin } from "lucide-react";
import Image from "next/image";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
  DrawerDescription,
} from "@/app/components/atoms/shadcn/drawer";
import { ScrollArea } from "@/app/components/atoms/shadcn/scroll-area";
import { Alert, AlertDescription } from "@/app/components/atoms/shadcn/alert";
import countries from "@/lib/data/countries.json";
import { Input } from "@/app/components/atoms/shadcn/input";
import { Separator } from "@/app/components/atoms/shadcn/separator";
import { count } from "console";

function DeliverySelectionDrawer() {
  const [country, setCountry] = useState({ name: "", code: "" });
  const [showCountries, setShowCountries] = useState(false);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    async function getLocationByIp() {
      const response = await fetch("http://ip-api.com/json/");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setCountry({ name: data.country, code: data.countryCode.toLowerCase() });
    }

    getLocationByIp();
  }, []);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="px-2 py-1">
          <Button
            onClick={() => setShowCountries(false)}
            className="w-screen justify-start px-0"
            variant="secondary"
          >
            <MapPin /> Delivered To {country.name}
          </Button>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm px-2 py-2">
          <DrawerClose className="absolute right-0 top-0" asChild>
            <Button variant="ghost" size="icon">
              <CircleX size={32} />
            </Button>
          </DrawerClose>
          <DrawerHeader className="flex flex-col items-center justify-between px-0">
            <DrawerTitle>Choose your location</DrawerTitle>
            <DrawerDescription>
              Pick a country/region to see items that ship there.
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col items-center gap-2">
            {!showCountries && (
              <>
                <div>
                  <Alert variant="destructive">
                    <AlertDescription className="flex items-center gap-1">
                      <MapPin />
                      <div className="h-auto w-8">
                        <Image
                          alt="country"
                          src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`}
                          width={1200}
                          height={600}
                        />
                      </div>

                      {country.name}
                    </AlertDescription>
                  </Alert>
                </div>
                <div className="flex w-full flex-col gap-2">
                  <DrawerClose onClick={() => setShowCountries(false)} asChild>
                    <Button>Stay</Button>
                  </DrawerClose>

                  <Button onClick={() => setShowCountries(true)}>
                    Other locations
                  </Button>
                </div>
              </>
            )}
            {showCountries && (
              <>
                <div className="pb-4">
                  <Input
                    type="text"
                    name="countryInput"
                    placeholder="Search country"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  />
                </div>
                <div className="w-full">
                  <ScrollArea className="overflow-auto ">
                    <ul className="h-80 overflow-y-scroll">
                      {countries
                        .filter(
                          (f) =>
                            f.name.toLowerCase().includes(filter) ||
                            filter === "",
                        )
                        .map((_country) => (
                          <>
                            <DrawerClose asChild>
                              <div>
                                <li
                                  key={_country.code}
                                  className="flex items-center gap-2 px-4"
                                  onClick={() => {
                                    setCountry({
                                      name: _country.name,
                                      code: _country.code,
                                    });
                                  }}
                                >
                                  <div className="h-auto w-6">
                                    <Image
                                      alt="country"
                                      src={`https://flagcdn.com/${_country.code.toLowerCase()}.svg`}
                                      width={1200}
                                      height={600}
                                    />
                                  </div>
                                  {_country.name}
                                </li>
                                <Separator className="my-2" />
                              </div>
                            </DrawerClose>
                          </>
                        ))}
                    </ul>
                  </ScrollArea>
                </div>
              </>
            )}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default DeliverySelectionDrawer;
