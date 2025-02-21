import { drizzle } from "drizzle-orm/neon-http";

if (!process.env.DATABASE_URL!) {
  throw new Error("Database URL is not provided");
}

const db = drizzle(process.env.DATABASE_URL!);
