import { useEffect, useRef, useState } from "react";

export default function useNetworkStatus() {
  const [isOnline, setOnline] = useState<boolean>(true);
  const [showOnline, setShowOnline] = useState<boolean>(false);
  const [isDisconnectedbefore, setIsDisconnectedBefore] = useState<boolean>(false);
  const timerId = useRef<ReturnType<typeof setTimeout> | undefined>();

  const updateNetworkStatus = () => {
    setOnline(navigator.onLine);
  };

  useEffect(() => {
    updateNetworkStatus();
  }, []);

  useEffect(() => {
    window.addEventListener("load", updateNetworkStatus);
    window.addEventListener("online", updateNetworkStatus);
    window.addEventListener("offline", updateNetworkStatus);

    if(!isOnline){
      setIsDisconnectedBefore(true);
    }

    if(isDisconnectedbefore && isOnline){
      setShowOnline(true);
      timerId.current = setTimeout(() => {
        setShowOnline(false);
      }, 5000);
    }

    return () => {
        window.removeEventListener("load", updateNetworkStatus);
        window.removeEventListener("online", updateNetworkStatus);
        window.removeEventListener("offline", updateNetworkStatus);
        clearTimeout(timerId.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOnline]);

  return { isOnline, showOnline };
}