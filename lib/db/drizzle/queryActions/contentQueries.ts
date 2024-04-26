"use server";

import { db } from "@/lib/db/drizzle";
import { sliderImagesTable } from "@/lib/db/drizzle/schemas";
import { eq } from "drizzle-orm";

export async function getSliderImagesQuery() {
  const sliderImages = await db.query.sliderImagesTable.findMany({
    where: eq(sliderImagesTable.isActive, true),
  });

  return sliderImages;
}