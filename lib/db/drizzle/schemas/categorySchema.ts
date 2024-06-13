import { relations, sql } from "drizzle-orm";
import { AnyPgColumn, text, uuid } from "drizzle-orm/pg-core";
import { productVariationTable, publicSchema } from "@/lib/db/drizzle/schemas";

export const categoryTable = publicSchema.table("category", {
  categoryId: uuid("category_id")
    .primaryKey()
    .default(sql`uuid_generate_v4()`),
  categoryName: text("category_name").notNull(),
  parentId: uuid("parent_id").references(
    (): AnyPgColumn => categoryTable.categoryId,
  ),
  iconDataUrl: text("icon_data_url"),
});

export const variationValueTable = publicSchema.table("variation_value", {
  variationValueId: uuid("variation_value_id")
    .primaryKey()
    .default(sql`uuid_generate_v4()`),
  attributeValue: uuid("attribute_value").notNull(),
});

export const variationTypeValueTable = publicSchema.table(
  "variation_type_value",
  {
    variationTypeValueId: uuid("variation_type_value_id")
      .primaryKey()
      .default(sql`uuid_generate_v4()`),
    variationTypeId: uuid("variation_type_id")
      .references(() => variationTypeTable.variationTypeId)
      .notNull(),
    variationValueId: uuid("variation_value_id")
      .references(() => variationValueTable.variationValueId)
      .notNull(),
  },
);

export const variationTypeTable = publicSchema.table("variation_type", {
  variationTypeId: uuid("variation_type_id")
    .primaryKey()
    .default(sql`uuid_generate_v4()`),
  attributeType: uuid("attribute_type").notNull(),
});

export const categoryVariationTable = publicSchema.table("category_variation", {
  categoryVariationId: uuid("category_variation_id")
    .primaryKey()
    .default(sql`uuid_generate_v4()`),
  categoryId: uuid("category_id")
    .references(() => categoryTable.categoryId)
    .notNull(),
  variationTypeId: uuid("variation_id")
    .references(() => variationTypeTable.variationTypeId)
    .notNull(),
});

// Relations

export const categoryRelations = relations(categoryTable, ({ one, many }) => ({
  parentCategory: one(categoryTable, {
    fields: [categoryTable.parentId],
    references: [categoryTable.categoryId],
  }),
  categoryVariationTable: many(categoryVariationTable),
}));

export const categoryVariationRelations = relations(
  categoryVariationTable,
  ({ one }) => ({
    categoryTable: one(categoryTable, {
      fields: [categoryVariationTable.categoryId],
      references: [categoryTable.categoryId],
    }),
    variationTypeTable: one(variationTypeTable, {
      fields: [categoryVariationTable.variationTypeId],
      references: [variationTypeTable.variationTypeId],
    }),
  }),
);

export const variationTypeRelations = relations(
  variationTypeTable,
  ({ many }) => ({
    categoryTable: many(categoryVariationTable),
    variationTypeValueTable: many(variationTypeValueTable),
  }),
);

export const variationValueRelations = relations(
  variationValueTable,
  ({ one }) => ({
    variationTypeValueTable: one(variationTypeValueTable, {
      fields: [variationValueTable.variationValueId],
      references: [variationTypeValueTable.variationValueId],
    }),
  }),
);

export const variationTypeValueRelations = relations(
  variationTypeValueTable,
  ({ one, many }) => ({
    variationTypeTable: one(variationTypeTable, {
      fields: [variationTypeValueTable.variationTypeId],
      references: [variationTypeTable.variationTypeId],
    }),
    variationValueTable: many(variationValueTable),
    productVariationTable: one(productVariationTable, {
      fields: [variationTypeValueTable.variationTypeValueId],
      references: [productVariationTable.variationTypeValueId],
    }),
  }),
);
