"use server";

import { db } from "@/lib/db/drizzle";
import {
  productGalleryTable,
  productTable,
  productDiscountTable,
  productReviewTable,
  productInventoryTable,
} from "@/lib/db/drizzle/schemas";
import { BasicProductList } from "@/lib/types/types";
import { eq, sql } from "drizzle-orm";

export async function getBasicProducts(): Promise<BasicProductList[]> {
  const products = await db
    .select({
      productId: productTable.productId,
      title: productTable.title,
      priceInAmount:
        sql<number>`${productInventoryTable.pricePerUnit} / 100`.as(
          "price_in_amount",
        ),
      totalReviews: sql<number>`count(${productReviewTable.productId})`.as(
        "total_review",
      ),
      primaryImageUrl: sql<string>`${productGalleryTable.imageUrl}`,
      primaryImageAlt: sql<string>`${productGalleryTable.imageAlt}`,
      discountPercentage: sql<number>`${productDiscountTable.discountPercentage}`,
      discountAmount:
        sql<number>`((${productInventoryTable.pricePerUnit} / 100) * (${productDiscountTable.discountPercentage}) / 100)`.as(
          "discount_amount",
        ),
      finalPrice:
        sql<number>`(${productInventoryTable.pricePerUnit} / 100) - (((${productInventoryTable.pricePerUnit} / 100) * (coalesce(${productDiscountTable.discountPercentage}, 0)) / 100))`.as(
          "final_price",
        ),
      averageReview: sql<number>`
        (
          SUM(
            CASE
              WHEN ${productReviewTable.rating} = 1 THEN 1.0 * 1
              WHEN ${productReviewTable.rating} = 2 THEN 1.0 * 2
              WHEN ${productReviewTable.rating} = 3 THEN 1.0 * 3
              WHEN ${productReviewTable.rating} = 4 THEN 1.0 * 4
              WHEN ${productReviewTable.rating} = 5 THEN 1.0 * 5
            END
          )
        ) / CAST(COUNT(${productReviewTable.rating}) AS FLOAT)`.as(
        "average_review",
      ),
    })
    .from(productTable)
    .leftJoin(
      productReviewTable,
      eq(productTable.productId, productReviewTable.productId),
    )
    .leftJoin(
      productGalleryTable,
      eq(productTable.productId, productGalleryTable.productId),
    )
    .leftJoin(
      productInventoryTable,
      eq(productTable.productId, productInventoryTable.productId),
    )
    .leftJoin(
      productDiscountTable,
      eq(
        productInventoryTable.productInventoryId,
        productDiscountTable.productInventoryId,
      ),
    )
    .where(eq(productGalleryTable.isPrimary, true))
    .groupBy(
      productTable.productId,
      productGalleryTable.imageUrl,
      productGalleryTable.imageAlt,
      productDiscountTable.discountPercentage,
      productInventoryTable.pricePerUnit,
    );

  return products;
}
