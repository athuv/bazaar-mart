import { defineConfig } from "drizzle-kit";
import { loadEnvConfig } from "@next/env";

loadEnvConfig("./");

export default defineConfig({
  schema: "./lib/db/drizzle/schema.ts",
  out: "./lib/db/drizzle/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL as string,
  },
  verbose: true,
  strict: true,
});
