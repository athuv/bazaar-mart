import { Button } from "@/app/_components/atoms/shadcn/button";
import { cn } from "@/lib/utils";
import { User } from "lucide-react";
import Link from "next/link";
import React from "react";

function ProfileLink() {
  return (
    <Button aria-label="my profile" size="icon" asChild>
      <Link href="/profile">
        <User size={24} />
      </Link>
    </Button>
  );
}

export default ProfileLink;
