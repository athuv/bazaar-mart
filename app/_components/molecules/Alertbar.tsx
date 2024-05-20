"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import useNetworkStatus from "@/app/_hooks/useNetworkStatus";
import { useFragmentParams } from "@/app/_hooks/useFragmentParams";

function Alertbar() {
  const { isOnline, showOnline } = useNetworkStatus();
  const { error, accessToken } = useFragmentParams();

  return (
    <>
      {error && (
        <div
          className={cn(
            "flex h-6 w-full items-center justify-center",
            error && "bg-destructive",
          )}
        >
          {error}
        </div>
      )}

      {accessToken && (
        <div
          className={cn(
            "flex h-6 w-full items-center justify-center gap-1",
            accessToken && "bg-success",
          )}
        >
          <span>Email Verified, Please Complete Your Profile</span>
          <Link className="underline" href="/auth">
            Here
          </Link>
        </div>
      )}

      {!isOnline && (
        <div className="flex h-6 w-full items-center justify-center bg-destructive">
          Your offline, Please check your internet connection
        </div>
      )}

      {showOnline && (
        <div className="flex h-6 w-full items-center justify-center bg-success">
          Thanks! Your Online.Now...
        </div>
      )}
    </>
  );
}
export default Alertbar;
