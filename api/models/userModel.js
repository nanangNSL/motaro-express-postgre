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

exports.register = async (data) => {
  const row = await db.query(
    `INSERT INTO users(name, email, phonenumber, password, refresh_token) VALUES ($1, $2, $3, $4, $5)`,
    [
      data.name,
      data.email,
      data.phonenumber,
      data.password,
      data.refresh_token
    ]
  );
  if (row.affectedRows === 0) {
    return null;
  }
  return { data };
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


exports.updateToken = async (data) => {
  const row = await db.query(
    `UPDATE users SET refresh_token=$1`,
    [
      data.refresh_token
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
