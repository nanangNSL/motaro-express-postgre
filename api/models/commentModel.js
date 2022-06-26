const db = require('../utils/db');

exports.insert = async (data) => {
    const row = await db.query(`INSERT INTO comment(user_id, comment) VALUES ($1, $2)`, [data.user_id,data.comment]);
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
    const row = await db.query(`UPDATE comment SET user_id =$1, comment=$2 WHERE id = $3`, [data.user_id, data.comment, id]);
    if (row.affectedRows === 0) { return null; }
    return { data };
};

exports.delete = async (id) => {
  const row = await db.query('DELETE FROM comment WHERE id = $1', [id]);
  if (row.affectedRows === 0) { return null; }
  return { id };
};