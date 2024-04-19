import { serial, text, timestamp, pgTable } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

// export const user = pgTable("user", {
//   id: serial("id"),
//   email: text("email"),
//   password: text("password"),
//   createdAt: timestamp("created_at"),
//   updatedAt: timestamp("updated_at"),
// });

sql.raw("DROP TABLE user");
