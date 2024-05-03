"use server";

import { db } from "@/lib/db/drizzle";
import { categoriesTable } from "@/lib/db/drizzle/schemas";
import { eq, isNull } from "drizzle-orm";
import { Category, GetMainCategories } from "@/lib/types/types";

export async function getMainCategoriesQuery({
  limit,
}: GetMainCategories): Promise<Category[]> {
  const mainCategories = await db.query.categoriesTable.findMany({
    where: isNull(categoriesTable.parentId),
    limit: limit,
    orderBy: (categoriesTable, { asc }) => [asc(categoriesTable.categoryId)],
  });

  return mainCategories;
}

export async function getChildCategoryByParentIdQuery({
  parentId,
}: {
  parentId: number;
}): Promise<Category[]> {
  const childCategories = await db.query.categoriesTable.findMany({
    where: eq(categoriesTable.parentId, parentId),
  });

  return childCategories;
}
