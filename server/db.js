const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "8683",
  host: "localhost",
  port: 5432,
  database: "todo_db",
});

module.exports = pool;