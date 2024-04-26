import { getMainCategoriesQuery } from "@/lib/db/drizzle/queryActions";
import { CategoriesHook, Category } from "@/lib/types/types";
import { useEffect, useState } from "react";

function useCategories({ limit = 0 }): CategoriesHook {
  const [mainCategories, setMainCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchMainCategories = async () => {
      const mainCategories: Category[] = await getMainCategoriesQuery({
        limit,
      });

      setMainCategories(mainCategories);
    };

    fetchMainCategories();
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  return { mainCategories };
}

export default useCategories;
