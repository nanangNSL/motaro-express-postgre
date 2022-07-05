const recipeModel = require('../models/recipeModel');
const motaroValidator = require('../validators/motaroValidator');

exports.insert = async (data) => {
  motaroValidator(data, ['user_id', 'title', 'image', 'inggredients', 'video', 'comment']);
  const post = await recipeModel.insert(data);
  return post;
};

exports.select = async () => {
  const posts = await recipeModel.select();
  return posts;
};


exports.update = async (id, data) => {
  // motaroValidator(data, id);
  const post = await recipeModel.update(id, data);
  return post;
};

exports.delete = async (id) => {
  motaroValidator({ id }, ['id']);
  const post = await recipeModel.delete(id);
  return post;
};