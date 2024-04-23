import { Category, GetMainCategories } from "@/lib/types/types";

export async function getMainCategories({
  limit,
}: GetMainCategories): Promise<Category[]> {
  const response = await fetch(
    `${process.env.BASE_URL}api/v1/categories?type=main&limit=${limit}`,
    {
      cache: "force-cache",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  return data.mainCategories;
}
