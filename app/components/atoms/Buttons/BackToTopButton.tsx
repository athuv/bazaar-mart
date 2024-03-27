"use client";

import { Button } from "@/app/components/atoms/shadcn/button";
import { ChevronUp } from "lucide-react";
import React, { ReactNode } from "react";

function BackToTopButton() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      onClick={handleBackToTop}
      variant="secondary"
      className="flex h-12 w-screen flex-col rounded-none"
    >
      <ChevronUp />
      <span>Back To Top</span>
    </Button>
  );
}

export default BackToTopButton;
