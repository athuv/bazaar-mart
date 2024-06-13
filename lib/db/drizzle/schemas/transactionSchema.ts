import {
  publicSchema,
  buyerTable,
  vendorTable,
  productTable,
} from "@/lib/db/drizzle/schemas";
import { integer, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";

export const cartTable = publicSchema.table("cart", {
  cartId: uuid("cart_id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  buyerId: uuid("buyerId").notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const cartItemTable = publicSchema.table("cart_item", {
  cartItemId: uuid("cart_item_id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  cartId: uuid("cart_id")
    .references(() => cartTable.cartId)
    .notNull(),
  quantity: integer("quantity").notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const refundTable = publicSchema.table("refund", {
  refundId: uuid("refund_id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  paymentId: uuid("payment_id"),
  refund_amount: integer("refund_amount").notNull(),
  reason: text("reason").notNull(),
  processedAt: timestamp("processed_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const paymentMethodTable = publicSchema.table("payment_method", {
  paymentMethodId: uuid("payment_method_id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  method: text("method").notNull(),
});

export const paymentStatusTable = publicSchema.table("payment_status", {
  paymentStatusId: uuid("payment_status_id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  status: text("status").notNull(),
});

export const paymentTable = publicSchema.table("payment", {
  paymentId: uuid("payment_id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  orderId: uuid("order_id")
    .references(() => orderTable.orderId)
    .notNull(),
  paymentMethodId: uuid("payment_method_id")
    .references(() => paymentMethodTable.paymentMethodId)
    .notNull(),
  paymentStatusId: uuid("payment_status_id")
    .references(() => paymentStatusTable.paymentStatusId)
    .notNull(),
  transactionId: uuid("transaction_id").notNull(),
  amount: integer("amount").notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const orderStatusTable = publicSchema.table("order_status", {
  orderStatusId: uuid("order_status_id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  status: text("status").notNull(),
});

export const orderTable = publicSchema.table("order", {
  orderId: uuid("order_id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  buyerId: uuid("buyer_id")
    .references(() => buyerTable.buyerId)
    .notNull(),
  vendorId: uuid("vendor_id")
    .references(() => vendorTable.vendorId)
    .notNull(),
  orderDateTime: timestamp("order")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  totalAmount: integer("total_amount").notNull(),
  orderStatusId: uuid("order_status_id")
    .references(() => orderStatusTable.orderStatusId)
    .notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const orderItemTable = publicSchema.table("order_item", {
  orderItemId: uuid("order_item_id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  orderId: uuid("order_id").references(() => orderTable.orderId),
  productId: uuid("product_id")
    .references(() => productTable.productId)
    .notNull(),
  quantity: integer("quantity").notNull(),
  subTotal: integer("sub_total").notNull(),
  finalAmount: integer("final_total").notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const shippingTable = publicSchema.table("shipping", {
  shippingId: uuid("shipping_id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  orderId: uuid("order_id")
    .references(() => orderTable.orderId)
    .notNull(),
  addressLineOne: text("address_line_one").notNull(),
  addressLineTwo: text("address_line_two").notNull(),
  city: text("city").notNull(),
  district: text("district").notNull(),
  shippingFee: integer("shipping_fee").notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

// Relations

export const cartRelations = relations(cartTable, ({ one, many }) => ({
  buyerTable: one(buyerTable, {
    fields: [cartTable.buyerId],
    references: [buyerTable.buyerId],
  }),
  cartItemTable: many(cartItemTable),
}));

export const cartItemRelations = relations(cartItemTable, ({ one }) => ({
  cartTable: one(cartTable, {
    fields: [cartItemTable.cartId],
    references: [cartTable.cartId],
  }),
}));

export const refundRelations = relations(refundTable, ({ one }) => ({
  paymentTable: one(paymentTable, {
    fields: [refundTable.paymentId],
    references: [paymentTable.paymentId],
  }),
}));

export const paymentRelations = relations(paymentTable, ({ many, one }) => ({
  refundTable: many(refundTable),
  orderTable: one(orderTable, {
    fields: [paymentTable.paymentId],
    references: [orderTable.orderId],
  }),
  paymentMethodTable: one(paymentMethodTable, {
    fields: [paymentTable.paymentMethodId],
    references: [paymentMethodTable.paymentMethodId],
  }),
  paymentStatusTable: one(paymentStatusTable, {
    fields: [paymentTable.paymentStatusId],
    references: [paymentStatusTable.paymentStatusId],
  }),
}));

export const paymentMethodRelations = relations(
  paymentMethodTable,
  ({ one }) => ({
    paymentTable: one(paymentTable, {
      fields: [paymentMethodTable.paymentMethodId],
      references: [paymentTable.paymentMethodId],
    }),
  }),
);

export const paymentStatusRelations = relations(
  paymentStatusTable,
  ({ one }) => ({
    paymentTable: one(paymentTable, {
      fields: [paymentStatusTable.paymentStatusId],
      references: [paymentTable.paymentStatusId],
    }),
  }),
);

export const orderStatusRelations = relations(orderStatusTable, ({ one }) => ({
  orderTable: one(orderTable, {
    fields: [orderStatusTable.orderStatusId],
    references: [orderTable.orderStatusId],
  }),
}));

export const orderRelations = relations(orderTable, ({ one, many }) => ({
  paymentTable: one(paymentTable, {
    fields: [orderTable.orderId],
    references: [paymentTable.orderId],
  }),
  buyerTable: one(buyerTable, {
    fields: [orderTable.buyerId],
    references: [buyerTable.buyerId],
  }),
  vendorTable: one(vendorTable, {
    fields: [orderTable.vendorId],
    references: [vendorTable.vendorId],
  }),
  orderStatusTable: one(orderStatusTable, {
    fields: [orderTable.orderStatusId],
    references: [orderStatusTable.orderStatusId],
  }),
  shippingTable: one(shippingTable, {
    fields: [orderTable.orderId],
    references: [shippingTable.orderId],
  }),
  orderItemTable: many(orderItemTable),
}));

export const orderItemRelations = relations(orderItemTable, ({ one }) => ({
  orderTable: one(orderTable, {
    fields: [orderItemTable.orderId],
    references: [orderTable.orderId],
  }),
}));

export const shippingRelations = relations(shippingTable, ({ one }) => ({
  orderTable: one(orderTable, {
    fields: [shippingTable.orderId],
    references: [orderTable.orderId],
  }),
}));
