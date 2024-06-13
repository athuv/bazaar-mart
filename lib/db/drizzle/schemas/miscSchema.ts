import { text, boolean, uuid, timestamp } from "drizzle-orm/pg-core";
import {
  publicSchema,
  authSchema,
  cartTable,
  productFaqTable,
  orderTable,
  productTable,
  productReviewTable,
} from "@/lib/db/drizzle/schemas";
import { relations, sql } from "drizzle-orm";

const authUsers = authSchema.table("users", {
  id: uuid("id"),
  // No need to define other columns if they are not needed for the reference
});

export const vendorTable = publicSchema.table("vendor", {
  vendorId: uuid("vendor_id")
    .primaryKey()
    .default(sql`uuid_generate_v4()`),
  userId: uuid("user_id")
    .references(() => authUsers.id, { onDelete: "cascade" })
    .notNull(),
  storeName: text("store_name").notNull(),
  description: text("description").notNull(),
  coverImageUrl: text("cover_image_url"),
  profileImageUrl: text("profile_image_url"),
});

export const buyerTable = publicSchema.table("buyer", {
  buyerId: uuid("buyer_id")
    .primaryKey()
    .default(sql`uuid_generate_v4()`),
  userId: uuid("user_id")
    .references(() => authUsers.id, { onDelete: "cascade" })
    .notNull(),
  profileImageUrl: text("profile_image_url"),
});

export const addressTable = publicSchema.table("address", {
  addressId: uuid("address_id")
    .primaryKey()
    .default(sql`uuid_generate_v4()`),
  userId: uuid("user_id")
    .references(() => authUsers.id, { onDelete: "cascade" })
    .notNull(),
  addressType: text("address_type").notNull(),
  addressLineOne: text("address_line_one").notNull(),
  addressLineTwo: text("address_line_two"),
  city: text("city").notNull(),
  district: text("district").notNull(),
});

export const sliderImageTable = publicSchema.table("slider_image", {
  sliderImageId: uuid("slider_image_id")
    .primaryKey()
    .default(sql`uuid_generate_v4()`),
  userId: uuid("user_id")
    .references(() => authUsers.id, { onDelete: "cascade" })
    .notNull(),
  imageMobileUrl: text("image_mobile_url").notNull(),
  imageDesktopUrl: text("image_desktop_url").notNull(),
  imageAlt: text("image_alt").notNull(),
  isActive: boolean("is_active").notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

// Relations

export const vendorRelations = relations(vendorTable, ({ one, many }) => ({
  authUser: one(authUsers, {
    fields: [vendorTable.userId],
    references: [authUsers.id],
  }),
  productTable: many(productTable),
  orderTable: many(orderTable),
}));

export const buyerRelations = relations(buyerTable, ({ one, many }) => ({
  categoryTable: one(authUsers, {
    fields: [buyerTable.userId],
    references: [authUsers.id],
  }),
  cartTable: one(cartTable, {
    fields: [buyerTable.buyerId],
    references: [cartTable.buyerId],
  }),
  productFaqTable: many(productFaqTable),
  orderTable: many(orderTable),
  productReviewTable: one(productReviewTable, {
    fields: [buyerTable.buyerId],
    references: [productReviewTable.buyerId],
  }),
}));

export const addressRelations = relations(addressTable, ({ one }) => ({
  authUser: one(authUsers, {
    fields: [addressTable.userId],
    references: [authUsers.id],
  }),
}));

export const sliderImageRelations = relations(sliderImageTable, ({ one }) => ({
  authUser: one(authUsers, {
    fields: [sliderImageTable.userId],
    references: [authUsers.id],
  }),
}));
