import { createFrontEndClient } from "@/lib/db/supabase";
import { SupabaseClient, User } from "@supabase/supabase-js";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const supabase = createFrontEndClient();

type State = {
  user: User | null | undefined;
  supabase: SupabaseClient;
  loading: boolean;
};

type Actions = {
  setUser: (user: User | null | undefined) => void;
  signOut: () => Promise<boolean>;
  setLoading: (loading: boolean) => void;
};

export const useAuthStore = create<State & Actions>((set) => ({
  user: null,
  loading: true,
  setLoading: (loading) => set({ loading }),
  setUser: (user) => set({ user }),
  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      set({ user: null });
      return true;
    }
    if (error) throw error;
    return false;
  },
  supabase,
}));

export const supabaseClient = supabase;
