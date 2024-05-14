// import { sql } from "@vercel/postgres";
// import { drizzle } from "drizzle-orm/vercel-postgres";
// import * as schema from "./schemas";

// export const db = drizzle(sql, { schema });

import * as schema from "./schemas";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = process.env.DATABASE_URL as string;

// Disable prefetch as it is not supported for "Transaction" pool mode
export const client = postgres(connectionString);
export const db = drizzle(client, { schema });
