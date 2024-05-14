import { productsTable } from "@/lib/db/drizzle/schemas";
import { relations } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";

export const categoriesTable = pgTable("category", {
  categoryId: text("category_id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  categoryName: varchar("category_name", { length: 50 }).notNull(),
  parentId: text("parent_id"),
  iconDataURL: text("icon_data_url"),
});

export const variationsTable = pgTable("variation", {
  variationId: text("variation_id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  attributeType: varchar("attribute_type", { length: 15 }).notNull(),
  attributeValue: varchar("attribute_value", { length: 25 }).notNull(),
});

export const categoryVariationsTable = pgTable("category_variation", {
  categoryVariationId: text("category_variation_id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  categoryId: text("category_id")
    .references(() => categoriesTable.categoryId)
    .notNull(),
  variationId: text("variation_id")
    .references(() => variationsTable.variationId)
    .notNull(),
});

// Relations

export const categoriesRelations = relations(
  categoriesTable,
  ({ one, many }) => ({
    parentCategory: one(categoriesTable, {
      fields: [categoriesTable.parentId],
      references: [categoriesTable.categoryId],
    }),
    productsTable: many(productsTable),
  }),
);

export const variationsRelations = relations(variationsTable, ({ one }) => ({
  categoryVariationsTable: one(categoryVariationsTable, {
    fields: [variationsTable.variationId],
    references: [categoryVariationsTable.variationId],
  }),
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
