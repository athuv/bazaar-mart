import {
  getAllCategories,
  getMainCategoriesQuery,
} from "@/lib/db/drizzle/queryActions";
import { CategoriesHook, Category } from "@/lib/types/types";
import { useEffect, useState } from "react";

function useCategories({ limit = 0 }): CategoriesHook {
  const [mainCategories, setMainCategories] = useState<Category[]>([]);
  const [categoriesTree, setCategoriesTree] = useState<Category[]>([]);

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

  useEffect(() => {
    const fetchCategoryTree = async () => {
      const categoriesTree: Category[] = await getAllCategories();
      setCategoriesTree(categoriesTree);
    };

    fetchCategoryTree();
  }, []);

  return { mainCategories, categoriesTree };
}

export default useCategories;
