import DeliverySelectionDrawer from "@/app/components/molecules/mobile/DeliverySelectionDrawer";
import React from "react";

function DeliverySelectionSection() {
  return (
    <section className="w-screen bg-secondary md:hidden">
      <DeliverySelectionDrawer />
    </section>
  );
}

export default DeliverySelectionSection;
