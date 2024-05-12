import { create } from "zustand";
import { persist } from "zustand/middleware";

import {
  getAllCategories,
  getMainCategories,
} from "@/lib/db/drizzle/queryActions";

import { Category } from "@/lib/types/types";

type State = {
  mainCategories: Category[];
  categoriesTree: Category[];
};

type Actions = {
  fetchMainCategories: (limit?: number) => Promise<void>;
  fetchCategoryTree: () => Promise<void>;
};

export const useCategoriesStore = create<State & Actions>()(
  persist(
    (set) => ({
      mainCategories: [],
      categoriesTree: [],
      fetchMainCategories: async (limit = 0) => {
        const mainCategories: Category[] = await getMainCategories({ limit });
        set((state) => ({ mainCategories }));
      },
      fetchCategoryTree: async () => {
        const categoriesTree: Category[] = await getAllCategories();
        set((state) => ({ categoriesTree }));
      },
    }),
    {
      name: "categories-store",
    },
  ),
);
