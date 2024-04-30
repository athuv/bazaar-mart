"use server";

import { db } from "@/lib/db/drizzle";
import {
  productImagesTable,
  productsTable,
  productDiscountsTable,
  productReviewsTable,
} from "@/lib/db/drizzle/schemas";
import { BasicProductList } from "@/lib/types/types";
import { eq, sql } from "drizzle-orm";

export async function getBasicProductsQuery(): Promise<BasicProductList[]> {
  const products = await db
    .select({
      productId: productsTable.productId,
      title: productsTable.title,
      priceInAmount:
        sql<number>`${productsTable.originalPriceInCents} / 100`.as(
          "price_in_amount",
        ),
      totalReviews: sql<number>`count(${productReviewsTable.productId})`.as(
        "total_review",
      ),
      primaryImageUrl: sql<string>`${productImagesTable.imageUrl}`,
      primaryImageAlt: sql<string>`${productImagesTable.imageAlt}`,
      discountPercentage: sql<number>`${productDiscountsTable.discountPercentage}`,
      discountAmount:
        sql<number>`((${productsTable.originalPriceInCents} / 100) * (${productDiscountsTable.discountPercentage}) / 100)`.as(
          "discount_amount",
        ),
      finalPrice:
        sql<number>`(${productsTable.originalPriceInCents} / 100) - (((${productsTable.originalPriceInCents} / 100) * (coalesce(${productDiscountsTable.discountPercentage}, 0)) / 100))`.as(
          "final_price",
        ),
      averageReview: sql<number>`
        (
          SUM(
            CASE
              WHEN ${productReviewsTable.rating} = 1 THEN 1.0 * 1
              WHEN ${productReviewsTable.rating} = 2 THEN 1.0 * 2
              WHEN ${productReviewsTable.rating} = 3 THEN 1.0 * 3
              WHEN ${productReviewsTable.rating} = 4 THEN 1.0 * 4
              WHEN ${productReviewsTable.rating} = 5 THEN 1.0 * 5
            END
          )
        ) / CAST(COUNT(${productReviewsTable.rating}) AS FLOAT)`.as(
        "average_review",
      ),
    })
    .from(productsTable)
    .leftJoin(
      productReviewsTable,
      eq(productsTable.productId, productReviewsTable.productId),
    )
    .leftJoin(
      productImagesTable,
      eq(productsTable.productId, productImagesTable.productId),
    )
    .leftJoin(
      productDiscountsTable,
      eq(productsTable.productId, productDiscountsTable.productId),
    )
    .where(eq(productImagesTable.isPrimary, true))

    .groupBy(
      productsTable.productId,
      productImagesTable.imageUrl,
      productImagesTable.imageAlt,
      productDiscountsTable.discountPercentage,
    );
  return products;
}
