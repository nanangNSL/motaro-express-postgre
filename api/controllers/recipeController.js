const recipeService = require('../services/recipeService');
const { imageUploadRecipe } = require('../middleware/multer');

exports.insert = async (request, response, next) => {
  try {
      const firstdata = {...request.body, image : imageUploadRecipe};
      const data = await recipeService.insert(firstdata);
      response.json({ data });
  } catch (error) {
    next(error);
  }
};

exports.select = async (request, response, next) => {
    try {
        const data = await recipeService.select();
        response.json({ data });
    } catch (error) {
      next(error);
    }
};

exports.selectById = async (request, response, next) => {
  try {
    const data = await recipeService.selectById(request.params.id);
    if (!data) { next(); } else { response.json({ data }); }
  } catch (error) {
    next(error);
  }
};

exports.update = async (request, response, next) => {
  try {
    const data = await recipeService.update(request.params.id, request.body);
    if (!data) { next(); } else { response.json({ data }); }
  } catch (error) {
    next(error);
  }
};

exports.delete = async (request, response, next) => {
  try {
    const data = await recipeService.delete(request.params.id);
    if (!data) { next(); } else { response.json({ data }); }
  } catch (error) {
    next(error);
  }
};