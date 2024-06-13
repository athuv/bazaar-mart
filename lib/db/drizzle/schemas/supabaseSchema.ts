import { pgSchema } from "drizzle-orm/pg-core";

export const publicSchema = pgSchema("public_2");
export const authSchema = pgSchema("auth");
