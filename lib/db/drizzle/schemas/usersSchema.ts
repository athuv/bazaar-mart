import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { users } from "@/lib/db/drizzle/schemas/authSchema";
import { relations } from "drizzle-orm";
import { productReviewsTable, productsTable } from "@/lib/db/drizzle/schemas";

export const addressTable = pgTable("address", {
  addressId: text("address_id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  addressLineOne: varchar("address_line_1", { length: 255 }).notNull(),
  addressLineTwo: varchar("address_line_2", { length: 255 }),
  city: varchar("city", { length: 25 }).notNull(),
  district: varchar("district", { length: 12 }).notNull(),
});

export const buyersTable = pgTable("buyer", {
  buyerId: text("buyer_id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text("user_id").references(() => users.id),
  shippingAddressId: text("shipping_address_id").references(
    () => addressTable.addressId,
    { onDelete: "cascade" },
  ),
});

export const vendorsTable = pgTable("vendor", {
  vendorId: text("vendor_id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text("user_id").references(() => users.id),
  storeName: varchar("store_name", { length: 50 }),
  storeAddressId: text("store_address_id").references(
    () => addressTable.addressId,
    { onDelete: "cascade" },
  ),
  description: varchar("description", { length: 360 }),
  coverPicture: varchar("cover_picture", { length: 60 }),
});

// Relations

export const addressRelations = relations(addressTable, ({ one }) => ({
  buyersTable: one(buyersTable, {
    fields: [addressTable.addressId],
    references: [buyersTable.buyerId],
  }),
  vendorsTable: one(vendorsTable, {
    fields: [addressTable.addressId],
    references: [vendorsTable.vendorId],
  }),
}));

export const buyersRelations = relations(buyersTable, ({ one, many }) => ({
  users: one(users, {
    fields: [buyersTable.userId],
    references: [users.id],
  }),
  addressTable: many(addressTable),
  productReviewsTable: many(productReviewsTable),
}));

export const vendorsRelations = relations(vendorsTable, ({ one, many }) => ({
  users: one(users, {
    fields: [vendorsTable.userId],
    references: [users.id],
  }),
  addressTable: one(addressTable, {
    fields: [vendorsTable.storeAddressId],
    references: [addressTable.addressId],
  }),
  productsTable: many(productsTable),
}));
