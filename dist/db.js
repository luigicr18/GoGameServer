"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
let pool;
try {
    pool = new pg_1.Pool({
        user: "postgres",
        host: "localhost",
        database: "postgres",
        password: "123Postgres.",
        port: 5432,
    });
}
catch (error) {
    console.error("Failed to initialize PostgreSQL connection pool", error);
    process.exit(1); // Exit the application if the pool cannot be initialized
}
exports.default = pool;
