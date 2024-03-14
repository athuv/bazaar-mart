import { Button } from "@/app/components/atoms/shadcn/button";
import { MapPin } from "lucide-react";
import React from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
} from "@/app/components/atoms/shadcn/drawer";

function DeliverySelectionDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="px-2 py-1">
          <Button className="w-screen justify-start px-0" variant="secondary">
            <MapPin /> Delivered To
          </Button>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div>DRAWER!!!</div>
      </DrawerContent>
    </Drawer>
  );
}

export default DeliverySelectionDrawer;
