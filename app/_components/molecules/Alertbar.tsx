"use client";

import useNetworkStatus from "@/app/_hooks/useNetworkStatus";

function Alertbar() {
  const { isOnline, showOnline } = useNetworkStatus();

  return (
    <>
      {!isOnline && (
        <div className="flex h-fit w-full items-center justify-center bg-destructive text-center">
          Your offline, Please check your internet connection
        </div>
      )}

      {showOnline && (
        <div className="flex h-fit w-full items-center justify-center bg-success text-center">
          Thanks! Your Online.Now...
        </div>
      )}
    </>
  );
}
export default Alertbar;
