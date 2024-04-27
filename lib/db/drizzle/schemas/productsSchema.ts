import {
  categoriesTable,
  vendorsTable,
  buyersTable,
} from "@/lib/db/drizzle/schemas";
import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const serviceTypeEnum = pgEnum("service_type", [
  "return policy",
  "Seller Warranty",
]);

export const productsTable = pgTable("product", {
  productId: serial("product_id").primaryKey(),
  vendorId: integer("vendor_id")
    .references(() => vendorsTable.vendorId)
    .notNull(),
  categoryId: integer("category_id")
    .references(() => categoriesTable.categoryId)
    .notNull(),
  title: varchar("title", { length: 185 }).notNull(),
  originalPriceInCents: integer("original_price_in_cents").notNull(),
  quantity: integer("quantity").notNull(),
  description: text("description"),
  serviceId: integer("service_id").references(() => servicesTable.serviceId),
});

export const productDiscountsTable = pgTable("product_discount", {
  productDiscountId: serial("product_discount_id").primaryKey(),
  productId: integer("product_id")
    .notNull()
    .references(() => productsTable.productId)
    .unique(),
  offerName: text("offer_name"),
  discountPercentage: integer("discount_percentage").notNull(),
  isActive: boolean("is_active"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const productImagesTable = pgTable("product_image", {
  productImageId: serial("product_image_id").primaryKey(),
  productId: integer("product_id")
    .references(() => productsTable.productId)
    .notNull(),
  image_url: text("image_url").notNull(),
  isPrimary: boolean("is_primary").notNull(),
});

export const servicesTable = pgTable("service", {
  serviceId: serial("service_id").primaryKey(),
  serviceType: serviceTypeEnum("service_type"),
  description: text("description"),
  duration: integer("duration"),
  applicableToProduct: boolean("applicable_to_product").notNull(),
  applicableToOrder: boolean("applicable_to_order").notNull(),
});

export const productFaqsTable = pgTable("product_faq", {
  productFaqId: serial("product_faq_id").primaryKey(),
  productId: integer("product_id")
    .references(() => productsTable.productId)
    .notNull(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  isActive: boolean("is_active").default(true),
});

export const productReviewsTable = pgTable("product_review", {
  productReviewId: serial("product_review_id").primaryKey(),
  productId: integer("product_id")
    .notNull()
    .references(() => productsTable.productId),
  buyerId: integer("buyer_id")
    .notNull()
    .references(() => buyersTable.buyerId),
  rating: integer("rating").notNull(),
  feedback: text("feedback"),
  isReviewerAnonymouse: boolean("is_reviewer_anonymouse").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// await db.execute(
//   sql`ALTER TABLE product_review ADD CONSTRAINT check__rate_integer_range CHECK (rating >= 1 AND rating <= 5)`,
// );

export const productReviewImagesTable = pgTable("product_review_image", {
  productReviewImageId: serial("product_review_image_id").primaryKey(),
  productReviewId: integer("product_review_id").notNull(),
  imageUrl: text("image_url").notNull(),
});

// Relations

export const productsRelations = relations(productsTable, ({ one, many }) => ({
  vendorsTable: one(vendorsTable, {
    fields: [productsTable.productId],
    references: [vendorsTable.vendorId],
    relationName: "",
  }),
  categoriesTable: one(categoriesTable, {
    fields: [productsTable.productId],
    references: [categoriesTable.categoryId],
  }),
  servicesTable: many(servicesTable),
  productImagesTable: many(productImagesTable),
  productFaqsTable: many(productFaqsTable),
  productReviewsTable: many(productReviewsTable),
  productDiscountsTable: one(productDiscountsTable, {
    fields: [productsTable.productId],
    references: [productDiscountsTable.productId],
  }),
}));

export const productDiscountsRelations = relations(
  productDiscountsTable,
  ({ one }) => ({
    productsTable: one(productsTable, {
      fields: [productDiscountsTable.productId],
      references: [productsTable.productId],
    }),
  }),
);

export const productImagesRelations = relations(
  productImagesTable,
  ({ one }) => ({
    productsTable: one(productsTable, {
      fields: [productImagesTable.productId],
      references: [productsTable.productId],
    }),
  }),
);

export const servicesRelations = relations(servicesTable, ({ one }) => ({
  productsTable: one(productsTable, {
    fields: [servicesTable.serviceId],
    references: [productsTable.serviceId],
  }),
}));

export const productFaqsRelations = relations(productFaqsTable, ({ one }) => ({
  productsTable: one(productsTable, {
    fields: [productFaqsTable.productId],
    references: [productsTable.productId],
  }),
}));

export const productReviewsRelations = relations(
  productReviewsTable,
  ({ one, many }) => ({
    productsTable: one(productsTable, {
      fields: [productReviewsTable.productId],
      references: [productsTable.productId],
    }),
    buyersTable: one(buyersTable, {
      fields: [productReviewsTable.buyerId],
      references: [buyersTable.buyerId],
    }),
    productReviewImagesTable: many(productReviewImagesTable),
  }),
);

export const productReviewImagesRelations = relations(
  productReviewImagesTable,
  ({ one }) => ({
    productReviewsTable: one(productReviewsTable, {
      fields: [productReviewImagesTable.productReviewId],
      references: [productReviewsTable.productReviewId],
    }),
  }),
);
