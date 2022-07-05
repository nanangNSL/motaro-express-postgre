const commentModel = require("../models/commentModel");
const motaroValidator = require("../validators/motaroValidator");

exports.insert = async (data) => {
  motaroValidator(data, ["user_id", "comment"]);
  const post = await commentModel.insert(data);
  return post;
};

exports.select = async () => {
  const posts = await commentModel.select();
  return posts;
};

exports.update = async (id, data) => {
  // motaroValidator(data, id);
  const post = await commentModel.update(id, data);
  return post;
};

exports.delete = async (id) => {
  motaroValidator({ id }, ["id"]);
  const post = await commentModel.delete(id);
  return post;
};
