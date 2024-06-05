"use client";

import { Badge } from "@/app/_components/atoms/shadcn/badge";
import { Button } from "@/app/_components/atoms/shadcn/button";
import { X } from "lucide-react";

function ClosableBadge() {
  return (
    <Badge variant="outline" className="flex gap-1 p-2">
      <span>Badge</span>
      <Button className="h-auto w-fit cursor-pointer p-1" size="icon" asChild>
        <X size={10} />
      </Button>
    </Badge>
  );
}
export default ClosableBadge;
