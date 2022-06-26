const db = require('../utils/db');

exports.insert = async (data) => {
    const row = await db.query(`INSERT INTO recipe(user_id, title, image, inggredients, video, comment) VALUES ($1, $2, $3, $4, $5, $6)`, [data.user_id, data.title, data.image, data.inggredients, data.video, data.comment]);
    if (row.affectedRows === 0) { return null; }
    return { data };
};

exports.select = async () => {
    const row = await db.query(`SELECT * FROM recipe`);
    return row.rows;
};

exports.selectById = async (id) => {
    const row = await db.query('SELECT * FROM recipe WHERE recipe_id = $1', [id]);
    return row.rows;
  };

exports.update = async (id, data) => {
    const row = await db.query(`UPDATE recipe SET user_id =$1, title =$2, image =$3, inggredients =$4, video =$5, comment =$6 WHERE recipe_id =$7`, [data.user_id, data.title, data.image, data.inggredients, data.video, data.comment, id]);
    if (row.affectedRows === 0) { return null; }
    return { data };
};

exports.delete = async (id) => {
  const row = await db.query('DELETE FROM recipe WHERE recipe_id = $1', [id]);
  if (row.affectedRows === 0) { return null; }
  return { id };
};