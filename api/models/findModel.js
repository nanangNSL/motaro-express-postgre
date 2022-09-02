const db = require('../utils/db');


exports.searchAllRecipe = async (search) => {
    const row = await db.query(`SELECT * FROM recipe FULL OUTER JOIN comment ON recipe.recipe_id = comment.recipe_id  WHERE recipe.title LIKE '%'||$1||'%' OR recipe.inggredients LIKE '%'||$1||'%' ORDER BY recipe.recipe_id DESC LIMIT $2 OFFSET $3`, [search.search, search.limit, search.offset ]);
    return row.rows;
  };