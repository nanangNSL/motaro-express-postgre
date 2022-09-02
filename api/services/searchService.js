const findModel = require('../models/findModel');

exports.searchAllRecipe = async (search) => {
    const posts = await findModel.searchAllRecipe(search);
    return posts;
  };