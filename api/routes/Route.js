const users = require('../controllers/userController');
const comment = require('../controllers/commentController');
const recipe = require('../controllers/recipeController.js');
const video = require('../controllers/videoController');
const  {imageUploadUser, imageUploadRecipe, imageUploadVideos}  = require('../middleware/multer');



module.exports = (route) => {

  route.post('/users/insert', imageUploadUser, users.insert);
  route.get('/users/get', users.select);
  route.get('/users/:id', users.selectById);
  route.patch('/users/:id', imageUploadUser, users.update);
  route.delete('/users/:id', users.delete);
 
  // comment
  route.post('/comment/insert', comment.insert);
  route.get('/comment/get', comment.select);
  route.get('/comment/:id', comment.selectById);
  route.patch('/comment/:id', comment.update);
  route.delete('/comment/:id', comment.delete);

  //recipe
  route.post('/recipe/insert', imageUploadRecipe, recipe.insert);
  route.get('/recipe/get', recipe.select);
  route.get('/recipe/:id', recipe.selectById);
  route.patch('/recipe/:id', imageUploadRecipe, recipe.update);
  route.delete('/recipe/:id', recipe.delete);

  //video
  route.post('/video/insert',imageUploadVideos, video.insert);
  route.get('/video/get', video.select);
  route.get('/video/:id', video.selectById);
  route.patch('/video/:id', imageUploadVideos, video.update);
  route.delete('/video/:id', video.delete);

};