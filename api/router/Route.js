const users = require('../controllers/userController');
const comment = require('../controllers/commentController');
const recipe = require('../controllers/recipeController.js');




module.exports = (route) => {
  route.post('/users/insert', users.insert);
  route.get('/users/get', users.select);
  route.get('/users/:id', users.selectById);
  route.patch('/users/:id', users.update);
  route.delete('/users/:id', users.delete);
 
  // comment
  route.post('/comment/insert', comment.insert);
  route.get('/comment/get', comment.select);
  route.get('/comment/:id', comment.selectById);
  route.patch('/comment/:id', comment.update);
  route.delete('/comment/:id', comment.delete);

  //recipe
  route.post('/recipe/insert', recipe.insert);
  route.get('/recipe/get', recipe.select);
  route.get('/recipe/:id', recipe.selectById);
  route.patch('/recipe/:id', recipe.update);
  route.delete('/recipe/:id', recipe.delete);
};