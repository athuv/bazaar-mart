import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const categoriesTable = pgTable("category", {
  categoryId: serial("category_id").primaryKey(),
  categoryName: varchar("category_name", { length: 50 }).notNull(),
  parentId: integer("parent_id"),
  iconDataURL: text("icon_data_url"),
});

export const variationsTable = pgTable("variation", {
  variationId: serial("variation_id").primaryKey(),
  attributeType: varchar("attribute_type", { length: 15 }).notNull(),
  attributeValue: varchar("attribute_value", { length: 25 }).notNull(),
});

export const categoryVariationsTable = pgTable("category_variation", {
  categoryVariationId: serial("category_variation_id").primaryKey(),
  categoryId: integer("category_id")
    .references(() => categoriesTable.categoryId)
    .notNull(),
  variationId: integer("variation_id")
    .references(() => variationsTable.variationId)
    .notNull(),
});

// Relations

export const categoriesRelations = relations(categoriesTable, ({ one }) => ({
  parentCategory: one(categoriesTable, {
    fields: [categoriesTable.parentId],
    references: [categoriesTable.categoryId],
  }),
}));

export const variationsRelations = relations(variationsTable, ({ many }) => ({
  categoryVariationsTable: many(categoryVariationsTable),
}));

export const categoryVariationsRelations = relations(
  categoryVariationsTable,
  ({ one, many }) => ({
    categoriesTable: one(categoriesTable, {
      fields: [categoryVariationsTable.categoryId],
      references: [categoriesTable.categoryId],
    }),
    variationsTable: many(variationsTable),
  }),
);
