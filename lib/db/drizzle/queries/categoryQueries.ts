import "server-only";

import { db } from "@/lib/db/drizzle";
import { categoriesTable } from "@/lib/db/drizzle/schemas";
import { isNull } from "drizzle-orm";

export async function getMainCategories(limit = 0) {
  const mainCategories = await db.query.categoriesTable.findMany({
    where: isNull(categoriesTable.parentId),
    limit: limit,
  });

  return mainCategories;
}
