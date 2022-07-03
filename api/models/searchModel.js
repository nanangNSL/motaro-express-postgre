const { request } = require("express");
const db = require("../utils/db");

exports.searchAll = async () => {
    const row = await db.query(`SELECT * FROM users ORDER BY id ASC LIMIT 20 OFFSET 5`);
    return row.rows;
  };
  
exports.searchByEmail = async (email) => {
    const row = await db.query(`SELECT * FROM users WHERE email =$1`,[email]);
    return row.rows;
  };

exports.searchToken = async (refresh_token) => {
    const row = await db.query(`SELECT * FROM users WHERE refresh_token =$1`,[refresh_token]);
    return row.rows;
  };

