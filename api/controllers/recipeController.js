const recipeService = require('../services/recipeServices');

exports.insert = async (request, response, next) => {
  try {
    console.log(request.file)
      const data = await recipeService.insert({...request.body, image: request.file.path});
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