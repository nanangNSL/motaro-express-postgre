const { validate, schema } = require('../utils/validate');

const Post = schema.object({
  id: schema.number(),
  name: schema.string(),
  image: schema.string(),
  email: schema.string().email(),
  phonenumber: schema.number(),
  password: schema.string(),
  my_recipe: schema.number(),
  save_recipe: schema.number(),
  like_recipe: schema.number(),

  // schema. for comment
  id: schema.number(),
  // user_id: schema.number(),
  comment: schema.string(),

  // schema. for recipe
  recipe_id: schema.number(),
  user_id: schema.number(),
  title: schema.string() ,
  image: schema.string(),
  inggredients: schema.string(),
  video: schema.number(),
  comment: schema.string(),
  date: schema.string(),

  // schema. for video
  user_id: schema.number(),
  title_video: schema.string(),
  video: schema.string(),
});

module.exports = (data, require) => validate(Post, data, require);