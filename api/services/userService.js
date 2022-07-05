const usersModel = require('../models/userModel');
const motaroValidator = require('../validators/motaroValidator');

exports.insert = async (data) => {
  motaroValidator(data, ['name', 'image', 'email', 'phonenumber', 'password', 'my_recipe', 'save_recipe', 'like_recipe']);
  const post = await usersModel.insert(data);
  return post;
};

exports.register = async (data) => {
  // motaroValidator(data, ['name','email', 'phonenumber', 'password']);
  const post = await usersModel.register(data);
  return post;
};

exports.update = async (id, data) => {
  // motaroValidator(data, id);
  const post = await usersModel.update(id, data);
  return post;
};

exports.updateToken = async (id, data) => {
  // motaroValidator(data, id);
  const post = await usersModel.updateToken(id, data);
  return post;
};

exports.delete = async (id) => {
  motaroValidator({ id }, ['id']);
  const post = await usersModel.delete(id);
  return post;
};