import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { users } from "@/lib/db/drizzle/schemas/authSchema";
import { relations } from "drizzle-orm";

export const addressTable = pgTable("address", {
  addressId: serial("address_id").primaryKey(),
  addressLineOne: varchar("address_line_1", { length: 255 }).notNull(),
  addressLineTwo: varchar("address_line_2", { length: 255 }),
  city: varchar("city", { length: 25 }).notNull(),
  district: varchar("district", { length: 12 }).notNull(),
});

export const buyersTable = pgTable("buyer", {
  buyerId: serial("buyer_id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  shippingAddressId: integer("shipping_address_id").references(
    () => addressTable.addressId,
    { onDelete: "cascade" },
  ),
});

export const vendorsTable = pgTable("vendor", {
  vendorId: serial("vendor_id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  storeName: varchar("store_name", { length: 50 }),
  storeAddressId: integer("store_address_id").references(
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
    fields: [buyersTable.buyerId],
    references: [users.id],
  }),
  addressTable: many(addressTable),
}));

export const vendorsRelations = relations(vendorsTable, ({ one }) => ({
  users: one(users, {
    fields: [vendorsTable.userId],
    references: [users.id],
  }),
  addressTable: one(addressTable, {
    fields: [vendorsTable.storeAddressId],
    references: [addressTable.addressId],
  }),
}));
