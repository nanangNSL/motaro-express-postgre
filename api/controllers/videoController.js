const videoService = require('../services/videoService');

exports.insert = async (request, response, next) => {
  try {
      const data = await videoService.insert({...request.body, video: request.file.path});
      response.json({ data });
  } catch (error) {
    next(error);
  }
};

exports.select = async (request, response, next) => {
    try {
        
        const data = await videoService.select();
        response.json({ data });
    } catch (error) {
      next(error);
    }
};

exports.selectById = async (request, response, next) => {
  try {
    const data = await videoService.selectById(request.params.id);
    if (!data) { next(); } else { response.json({ data }); }
  } catch (error) {
    next(error);
  }
};

exports.update = async (request, response, next) => {
  try {
    const data = await videoService.update(request.params.id,{...request.body, video: request.file.path});
    if (!data) { next(); } else { response.json({ data }); }
  } catch (error) {
    next(error);
  }
};

exports.delete = async (request, response, next) => {
  try {
    const data = await videoService.delete(request.params.id);
    if (!data) { next(); } else { response.json({ data }); }
  } catch (error) {
    next(error);
  }
};