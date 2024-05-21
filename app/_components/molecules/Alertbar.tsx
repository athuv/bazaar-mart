"use client";

import useNetworkStatus from "@/app/_hooks/useNetworkStatus";

function Alertbar() {
  const { isOnline, showOnline } = useNetworkStatus();

  return (
    <>
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
