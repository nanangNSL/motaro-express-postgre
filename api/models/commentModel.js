const db = require('../utils/db');

exports.insert = async (data) => {
    let date = (new Date()).toISOString().split('T')[0];
    const row = await db.query(`INSERT INTO comment(user_id, recipe_id, comment, create_at) VALUES ($1, $2, $3, $4)`, [data.user_id, data.recipe_id, data.comment, date]);
    if (row.affectedRows === 0) { return null; }
    return { data };
};

exports.select = async () => {
    const row = await db.query(`SELECT * FROM comment`);
    return row.rows;
};

exports.selectById = async (id) => {
    const row = await db.query('SELECT * FROM comment WHERE id = $1', [id]);
    return row.rows;
  };

exports.update = async (id, data) => {
  let date = (new Date()).toISOString().split('T')[0];
    const row = await db.query(`UPDATE comment SET user_id =$1, recipe_id=2, comment=$3,  create_at = $4 WHERE id = $5`, [data.user_id, data.recipe_id, data.comment, date, id]);
    if (row.affectedRows === 0) { return null; }
    return { data };
};

exports.delete = async (id) => {
  const row = await db.query('DELETE FROM comment WHERE id = $1', [id]);
  if (row.affectedRows === 0) { return null; }
  return { id };
};