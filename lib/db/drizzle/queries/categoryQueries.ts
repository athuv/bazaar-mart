import "server-only";

import { db } from "@/lib/db/drizzle";
import { categoriesTable } from "@/lib/db/drizzle/schemas";
import { isNull } from "drizzle-orm";
import { Category, GetMainCategories } from "@/lib/types/types";

export async function getMainCategoriesQuery({
  limit,
}: GetMainCategories): Promise<Category[]> {
  const mainCategories = await db.query.categoriesTable.findMany({
    where: isNull(categoriesTable.parentId),
    limit: limit,
  });

  return mainCategories;
}
