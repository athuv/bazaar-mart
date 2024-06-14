"use server";

import { db } from "@/lib/db/drizzle";
import { sliderImageTable } from "@/lib/db/drizzle/schemas";
import { SliderImage } from "@/lib/types/types";
import { eq } from "drizzle-orm";

export async function getSliderImages(): Promise<SliderImage[]> {
  const sliderImages = await db.query.sliderImageTable.findMany({
    where: eq(sliderImageTable.isActive, true),
  });

  return sliderImages;
}
