const usersModel = require('../models/userModel');
const motaroValidator = require('../validators/motaroValidator');

exports.insert = async (data) => {
  motaroValidator(data, ['name', 'image', 'email', 'phonenumber', 'password', 'my_recipe', 'save_recipe', 'like_recipe']);
  const post = await usersModel.insert(data);
  return post;
};

exports.select = async () => {
  const posts = await usersModel.select();
  return posts;
};

exports.selectById = async (id) => {
  const post = await usersModel.selectById(id);
  return post;
};

exports.update = async (id, data) => {
  // motaroValidator(data, id);
  const post = await usersModel.update(id, data);
  return post;
};

exports.delete = async (id) => {
  motaroValidator({ id }, ['id']);
  const post = await usersModel.delete(id);
  return post;
};