import { Pool } from "pg";

let pool: Pool;

try {
  pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "123Postgres.",
    port: 5432,
  });
} catch (error) {
  console.error("Failed to initialize PostgreSQL connection pool", error);
  process.exit(1); // Exit the application if the pool cannot be initialized
}

export default pool;
