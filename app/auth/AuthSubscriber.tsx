"use client";

import { useAuthStore } from "@/lib/stores/useAuthStore";

import { useEffect } from "react";

function AuthSubscriber() {
  const setUser = useAuthStore((state) => state.setUser);
  const user = useAuthStore((state) => state.user);
  const supabase = useAuthStore((state) => state.supabase);
  const setLoading = useAuthStore((state) => state.setLoading);

  async function getUser() {
    const { data } = await supabase.auth.getSession();
    setUser(data.session?.user);
    setLoading(false);
  }

  const { data: authListener } = supabase.auth.onAuthStateChange(
    (event, session) => {
      setUser(session?.user);
    },
  );
  useEffect(() => {
    getUser();

    return () => {
      authListener?.subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, supabase]);

  return <></>;
}

export default AuthSubscriber;
