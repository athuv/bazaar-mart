import { getMainCategories } from "@/lib/api";
import { CategoriesHook, Category } from "@/lib/types/types";
import { useEffect, useState } from "react";

function useCategories({ limit = 0 }): CategoriesHook {
  const [mainCategories, setMainCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchMainCategories = async () => {
      const mainCategories = await getMainCategories({ limit: limit });
      setMainCategories(mainCategories);
    };

    fetchMainCategories();
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  return { mainCategories };
}

export default useCategories;
