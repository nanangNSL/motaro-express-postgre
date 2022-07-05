const commentService = require("../services/commentService");

exports.insert = async (request, response, next) => {
  try {
    const data = await commentService.insert(request.body);
    response.json({ data });
  } catch (error) {
    next(error);
  }
};

exports.select = async (request, response, next) => {
  try {
    const data = await commentService.select();
    response.json({ data });
  } catch (error) {
    next(error);
  }
};

exports.update = async (request, response, next) => {
  try {
    const data = await commentService.update(request.params.id, request.body);
    if (!data) {
      next();
    } else {
      response.json({ data });
    }
  } catch (error) {
    next(error);
  }
};

exports.delete = async (request, response, next) => {
  try {
    const data = await commentService.delete(request.params.id);
    if (!data) {
      next();
    } else {
      response.json({ data });
    }
  } catch (error) {
    next(error);
  }
};
