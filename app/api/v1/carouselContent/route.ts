import { getSliderImages } from "@/lib/db/drizzle/queries";

export async function GET() {
  const slider = await getSliderImages();

  return Response.json({ slider });
}
