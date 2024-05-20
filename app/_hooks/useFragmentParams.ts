import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function useFragmentParams() {
  const router = useRouter();
  const [error, setError] = useState<string | undefined>(undefined);
  const [accessToken, setAccessToken] = useState<string | undefined>(undefined);

  const errorTimerId = useRef<ReturnType<typeof setTimeout> | undefined>();
  const accessTokenTimerId = useRef<ReturnType<typeof setTimeout> | undefined>();

  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.substring(1));
    const errorDescription = params.get("error_description");
    const access_token = params.get("access_token");

    if (errorDescription) {
      setError(errorDescription);
      errorTimerId.current = setTimeout(() => {
        setError(undefined);
      }, 15000);
    }


    if (access_token) {
      setAccessToken(access_token);
      accessTokenTimerId.current = setTimeout(() => {
        setAccessToken(undefined);
      }, 15000);
    }

    return () => {
      clearTimeout(errorTimerId.current);
      clearTimeout(accessTokenTimerId.current);
  };

  }, [router]);
  
  return {error, accessToken}
}