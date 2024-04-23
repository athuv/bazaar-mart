import { getMainCategoriesQuery } from "@/lib/db/drizzle/queries";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const type = request.nextUrl.searchParams.get("type");

  if (type === "main") {
    const limitParam = request.nextUrl.searchParams.get("limit");
    const limit = Number(limitParam);
    const validLimit = !isNaN(limit) ? limit : 0;

    const mainCategories = await getMainCategoriesQuery({ limit: validLimit });

    return Response.json({ mainCategories });
  }
}
