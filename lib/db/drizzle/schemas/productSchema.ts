import {
  buyerTable,
  categoryTable,
  publicSchema,
  variationTypeValueTable,
  vendorTable,
} from "@/lib/db/drizzle/schemas";
import { relations, sql } from "drizzle-orm";
import { boolean, text, timestamp, uuid, integer } from "drizzle-orm/pg-core";

export const productTable = publicSchema.table("product", {
  productId: uuid("product_id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  vendorId: uuid("vendor_id")
    .references(() => vendorTable.vendorId)
    .notNull(),
  categoryId: uuid("category_id")
    .references(() => categoryTable.categoryId)
    .notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const productFaqTable = publicSchema.table("product_faq", {
  productFaqId: uuid("product_faq_id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  productId: uuid("product_id")
    .references(() => productTable.productId)
    .notNull(),
  buyerId: uuid("buyer_id")
    .references(() => buyerTable.buyerId)
    .notNull(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  isActive: boolean("is_active").notNull(), // If active Q&A will be shown in product detail page
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const productGalleryTable = publicSchema.table("product_gallery", {
  productGalleryId: uuid("product_gallery_id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  productId: uuid("product_id")
    .references(() => productTable.productId)
    .notNull(),
  imageUrl: text("image_url").notNull(),
  imageAlt: text("image_alt").notNull(),
  isPrimary: boolean("is_primary").notNull(),
});

export const productReviewTable = publicSchema.table("product_review", {
  productReviewId: uuid("product_review_id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  productId: uuid("product_id")
    .references(() => productTable.productId)
    .notNull(),
  buyerId: uuid("buyer_id")
    .references(() => buyerTable.buyerId)
    .notNull(),
  rating: integer("rating").notNull(),
  feedback: text("feedback").notNull(),
  isAnonymous: boolean("is_anonymous").notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const productReviewGalleryTable = publicSchema.table(
  "product_review_gallery",
  {
    productReviewGalleryId: uuid("product_review_gallery_id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    productReviewId: uuid("product_review_id")
      .references(() => productReviewTable.productReviewId)
      .notNull(),
    imageUrl: text("image_url").notNull(),
    imageAlt: text("image_alt").notNull(),
    isPrimary: boolean("is_primary").notNull(),
  },
);

export const productDiscountTable = publicSchema.table(
  "product_discount_table",
  {
    productDiscountId: uuid("product_discount_id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    productInventoryId: uuid("product_inventory_id")
      .references(() => productInventoryTable.productInventoryId)
      .notNull(),
    offerName: text("offer_name").notNull(),
    discountPercentage: integer("discount_percentage").notNull(),
    isActive: boolean("is_active").notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
);

export const productInventoryTable = publicSchema.table(
  "product_inventory_table",
  {
    productInventoryId: uuid("product_inventory_id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    productId: uuid("product_id")
      .references(() => productTable.productId)
      .notNull(),
    batchName: text("batch_name").notNull(),
    initialQuantity: integer("initial_quantity").notNull(),
    availableQuantity: integer("available_quantity").notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
);

export const serviceTable = publicSchema.table("service", {
  serviceId: uuid("service_id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  serviceName: text("service_name").notNull(),
  description: text("description").notNull(),
  durationHour: integer("duration_hour"),
  applicableToProduct: boolean("applicable_to_product").notNull(),
  applicableToOrder: boolean("applicable_to_order").notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const serviceProductTable = publicSchema.table("service_product", {
  serviceProductId: uuid("service_product_id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  productInventoryId: uuid("product_inventory_id")
    .references(() => productInventoryTable.productInventoryId)
    .notNull(),
  serviceId: uuid("service_id")
    .references(() => serviceTable.serviceId)
    .notNull(),
});

export const productVariationTable = publicSchema.table("product_variation", {
  productVariationId: uuid("product_variation_id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  productInventoryId: uuid("product_inventory_id")
    .references(() => productInventoryTable.productInventoryId)
    .notNull(),
  variationTypeValueId: uuid("variation_type_value_id").references(
    () => variationTypeValueTable.variationTypeValueId,
  ),
});

//  Relations
export const productRelations = relations(productTable, ({ one, many }) => ({
  categoryTable: one(categoryTable, {
    fields: [productTable.categoryId],
    references: [categoryTable.categoryId],
  }),

  vendorTable: one(vendorTable, {
    fields: [productTable.vendorId],
    references: [vendorTable.vendorId],
  }),
  productFaqTable: many(productFaqTable),
  productGalleryTable: many(productGalleryTable),
  productReviewTable: many(productReviewTable),
  productInventoryTable: many(productInventoryTable),
}));

export const productFaqRelations = relations(productFaqTable, ({ one }) => ({
  productTable: one(productTable, {
    fields: [productFaqTable.productId],
    references: [productTable.productId],
  }),
  buyerId: one(buyerTable, {
    fields: [productFaqTable.buyerId],
    references: [buyerTable.buyerId],
  }),
}));

export const productGalleryRelations = relations(
  productGalleryTable,
  ({ one }) => ({
    productTable: one(productTable, {
      fields: [productGalleryTable.productId],
      references: [productTable.productId],
    }),
  }),
);

export const productReviewRelations = relations(
  productReviewTable,
  ({ one, many }) => ({
    productTable: one(productTable, {
      fields: [productReviewTable.productId],
      references: [productTable.productId],
    }),
    buyerTable: one(buyerTable, {
      fields: [productReviewTable.buyerId],
      references: [buyerTable.buyerId],
    }),
    productReviewGalleryTable: many(productReviewGalleryTable),
  }),
);

export const productReviewGalleryRelations = relations(
  productReviewGalleryTable,
  ({ one }) => ({
    productReviewTable: one(productReviewTable, {
      fields: [productReviewGalleryTable.productReviewId],
      references: [productReviewTable.productReviewId],
    }),
  }),
);

export const productDiscountRelations = relations(
  productDiscountTable,
  ({ one }) => ({
    productInventoryTable: one(productInventoryTable, {
      fields: [productDiscountTable.productInventoryId],
      references: [productInventoryTable.productInventoryId],
    }),
  }),
);

export const productInventoryRelations = relations(
  productInventoryTable,
  ({ one, many }) => ({
    productDiscountTable: one(productDiscountTable, {
      fields: [productInventoryTable.productInventoryId],
      references: [productDiscountTable.productInventoryId],
    }),
    productTable: one(productTable, {
      fields: [productInventoryTable.productId],
      references: [productTable.productId],
    }),
    serviceProductTable: many(serviceProductTable),
    productVariationTable: many(productVariationTable),
  }),
);

export const serviceRelations = relations(serviceTable, ({ one }) => ({
  serviceProductTable: one(serviceProductTable, {
    fields: [serviceTable.serviceId],
    references: [serviceProductTable.serviceProductId],
  }),
}));

export const serviceProductRelations = relations(
  serviceProductTable,
  ({ one }) => ({
    productInventoryTable: one(productInventoryTable, {
      fields: [serviceProductTable.productInventoryId],
      references: [productInventoryTable.productInventoryId],
    }),
    serviceTable: one(serviceTable, {
      fields: [serviceProductTable.serviceId],
      references: [serviceTable.serviceId],
    }),
  }),
);

export const productVariationRelations = relations(
  productVariationTable,
  ({ one }) => ({
    productInventoryTable: one(productInventoryTable, {
      fields: [productVariationTable.productInventoryId],
      references: [productInventoryTable.productInventoryId],
    }),
    variationTypeValueTable: one(variationTypeValueTable, {
      fields: [productVariationTable.variationTypeValueId],
      references: [variationTypeValueTable.variationTypeValueId],
    }),
  }),
);
