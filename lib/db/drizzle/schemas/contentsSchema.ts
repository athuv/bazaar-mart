import { users } from "@/lib/db/drizzle/schemas/authSchema";
import { relations } from "drizzle-orm";
import {
  boolean,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const sliderImagesTable = pgTable("slider_image", {
  sliderImageId: text("slider_image_id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text("user_id")
    .references(() => users.id)
    .notNull(),
  imageMobile: varchar("image_mobile", { length: 10 }),
  imageAlt: varchar("image_alt", { length: 10 }),
  imageDesktop: varchar("image_desktop", { length: 10 }),
  isActive: boolean("isActive").default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Relations

export const sliderImagesRelations = relations(
  sliderImagesTable,
  ({ one }) => ({
    users: one(users, {
      fields: [sliderImagesTable.userId],
      references: [users.id],
    }),
  }),
);
