const videoModel = require('../models/videoModel');
const motaroValidator = require('../validators/motaroValidator');

exports.insert = async (data) => {
  motaroValidator(data, ['user_id', 'title_video','video']);
  const post = await videoModel.insert(data);
  return post;
};

exports.select = async () => {
  const posts = await videoModel.select();
  return posts;
};



exports.update = async (id, data) => {
  // motaroValidator(data, id);
  const post = await videoModel.update(id, data);
  return post;
};

exports.delete = async (id) => {
  motaroValidator({ id }, ['id']);
  const post = await videoModel.delete(id);
  return post;
};