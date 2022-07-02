const { request } = require("express");
const db = require("../utils/db");

exports.insert = async (data) => {
  const row = await db.query(
    `INSERT INTO users(name, image, email, phonenumber, password, my_recipe, save_recipe, like_recipe) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
    [
      data.name,
      data.image,
      data.email,
      data.phonenumber,
      data.password,
      data.my_recipe,
      data.save_recipe,
      data.like_recipe,
    ]
  );
  if (row.affectedRows === 0) {
    return null;
  }
  return { data };
};

exports.select = async () => {
  const row = await db.query(`SELECT * FROM public.users
    ORDER BY id ASC `);
  return row.rows;
};

exports.selectById = async (id) => {
  const row = await db.query("SELECT * FROM users WHERE id = $1", [id]);
  return row.rows;
};

exports.update = async (id, data) => {
  const row = await db.query(
    `UPDATE users SET name = $1, image =$2, email = $3,phonenumber = $4, password = $5, my_recipe = $6, save_recipe = $7, like_recipe = $8 WHERE id = $9`,
    [
      data.name,
      data.image,
      data.email,
      data.phonenumber,
      data.password,
      data.my_recipe,
      data.save_recipe,
      data.like_recipe,
      id,
    ]
  );

  if (row.affectedRows === 0) {
    return null;
  }
  return { data };
};

exports.delete = async (id) => {
  const row = await db.query("DELETE FROM users WHERE id = $1", [id]);
  if (row.affectedRows === 0) {
    return null;
  }
  return { id };
};
