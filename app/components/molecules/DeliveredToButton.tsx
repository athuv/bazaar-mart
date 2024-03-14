import { Button } from "@/app/components/atoms/shadcn/button";
import { MapPin } from "lucide-react";
import React from "react";

function DeliveredToButton() {
  return (
    <div className="px-2 py-1">
      <Button className="w-screen justify-start px-0" variant="secondary">
        <MapPin /> Delivered To
      </Button>
    </div>
  );
}

export default DeliveredToButton;
