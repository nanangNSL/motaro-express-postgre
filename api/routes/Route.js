
const users = require('../controllers/userController');
const search = require('../controllers/searchController');
const comment = require('../controllers/commentController');
const recipe = require('../controllers/recipeController.js');
const video = require('../controllers/videoController');
const  {imageUploadUser, imageUploadRecipe, imageUploadVideos}  = require('../middleware/multer');
const { Register, Login, Logout} = require('../controllers/authController');
const { verifyToken } = require('../middleware/verifyToken');
const { refreshToken } = require('../controllers/refreshToken');



module.exports = (route) => {

  route.post('/motaro/register', Register); 
  route.post('/motaro/login', Login); 
  route.delete('/motaro/logout', Logout); 
  route.post('/motaro/token', refreshToken); 

  route.get('/motaro/find', verifyToken, search.searchAll)
  route.get('/motaro/:email',verifyToken, search.searchByEmail)
  // route.get('/motaro/name/:name', search.searchByName)

  route.post('/users/insert', imageUploadUser, users.insert);
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