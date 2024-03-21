import { Button } from "@/app/components/atoms/shadcn/button";
import { ChevronRight, Headset, Languages } from "lucide-react";
import Link from "next/link";
import React from "react";

function SlideDrawerSettings() {
  return (
    <div className="p-3">
      <div>
        <Button variant="link" className="p-0" asChild>
          <Link
            className="flex w-full items-center justify-between"
            href="/categories/popular"
          >
            <h1 className="header-4 text-foreground">Settings</h1>
            <ChevronRight />
          </Link>
        </Button>
      </div>
      <div className="flex flex-col gap-1 pt-1">
        <Button
          className="flex w-full items-center justify-start gap-2 p-0"
          variant="link"
          asChild
        >
          <Link href="/setting/language">
            <Languages />
            <span>Language</span>
          </Link>
        </Button>
        <Button
          className="flex w-full items-center justify-start gap-2 p-0"
          variant="link"
          asChild
        >
          <Link href="/setting/language">
            <Headset />
            <span>Help Center</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default SlideDrawerSettings;
