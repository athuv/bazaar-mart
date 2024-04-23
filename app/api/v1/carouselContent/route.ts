import { getSliderImagesQuery } from "@/lib/db/drizzle/queries";

export async function GET() {
  const slider = await getSliderImagesQuery();

  return Response.json({ slider });
}
