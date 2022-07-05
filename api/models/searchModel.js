const { request } = require("express");
const db = require("../utils/db");

exports.searchAllUsers = async () => {
    const row = await db.query(`SELECT * FROM users ORDER BY id ASC LIMIT 20 OFFSET 5`);
    return row.rows;
  };
  
exports.searchUserByEmail = async (email) => {
    const row = await db.query(`SELECT * FROM users WHERE email =$1`,[email]);
    return row.rows;
  };

exports.searchById = async (id) => {
    const row = await db.query("SELECT * FROM users WHERE id = $1", [id]);
    return row.rows;
  };

  exports.searchComentID = async (id) => {
    const row = await db.query('SELECT * FROM comment WHERE id = $1', [id]);
    return row.rows;
  };

exports.searchRecipeId = async (id) => {
    const row = await db.query('SELECT * FROM recipe WHERE recipe_id = $1', [id]);
    return row.rows;
  };

exports.searchVideoId = async (id) => {
    const row = await db.query('SELECT * FROM sub_video WHERE id_video = $1', [id]);
    return row.rows;
  };


exports.searchToken = async (refresh_token) => {
    const row = await db.query(`SELECT * FROM users WHERE refresh_token =$1`,[refresh_token]);
    return row.rows;
  };


