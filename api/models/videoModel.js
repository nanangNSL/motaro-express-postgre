const db = require('../utils/db');

exports.insert = async (data) => {
    let date = (new Date()).toISOString().split('T')[0];
    const row = await db.query(`INSERT INTO sub_video (user_id,title_video, video, create_at) VALUES ($1, $2, $3,$4)`, [data.user_id, data.title_video, data.video, date]);
    if (row.affectedRows === 0) { return null; }
    return { data };
};

exports.select = async () => {
    const row = await db.query(`SELECT * FROM sub_video`);
    return row.rows;
};


exports.update = async (id, data) => {
    let date = (new Date()).toISOString().split('T')[0];
    const row = await db.query(`UPDATE sub_video SET User_id =$1, title_video = $2, video =$3,  create_at =$4 WHERE id_video = $5`, [data.user_id, data.title_video, data.video, date, id]);
    if (row.affectedRows === 0) { return null; }
    return { data };
};

exports.delete = async (id) => {
  const row = await db.query('DELETE FROM sub_video WHERE id_video = $1', [id]);
  if (row.affectedRows === 0) { return null; }
  return { id };
};