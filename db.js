const Pool = require("pg").Pool;
require('dotenv').config()

const pool = new Pool({
    user: process.env.DB_USERS,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
});
pool.connect(function (err) {
  if (err) throw err;
  console.log("Database connected 🚀💖!");
});

module.exports = pool;
