"use server";

import { db } from "@/lib/db/drizzle";
import { categoriesTable } from "@/lib/db/drizzle/schemas";
import { eq, isNull } from "drizzle-orm";
import { Category, GetMainCategories } from "@/lib/types/types";

export async function getMainCategories({
  limit,
}: GetMainCategories): Promise<Category[]> {
  const mainCategories = await db.query.categoriesTable.findMany({
    where: isNull(categoriesTable.parentId),
    limit: limit,
    orderBy: (categoriesTable, { asc }) => [asc(categoriesTable.categoryId)],
  });

  return mainCategories;
}

export async function getAllCategories() {
  const mainCategories: Category[] = await db.query.categoriesTable.findMany();

  function buildCategoryTree(
    categories: Category[],
    parentId: number | null,
  ): Category[] {
    const children = categories.filter(
      (category) => category.parentId === parentId,
    );

    return children.map((category) => ({
      categoryId: category.categoryId,
      categoryName: category.categoryName,
      iconDataURL: category.iconDataURL,
      parentId: category.parentId,
      children: buildCategoryTree(categories, category.categoryId), // Recursive call for children
    }));
  }

  const categoryTree = buildCategoryTree(mainCategories, null);
  return categoryTree.sort((a, b) => a.categoryId - b.categoryId);
}

export async function getChildCategoryByParentId({
  parentId,
}: {
  parentId: number;
}): Promise<Category[]> {
  const childCategories = await db.query.categoriesTable.findMany({
    where: eq(categoriesTable.parentId, parentId),
  });

  return childCategories;
}
