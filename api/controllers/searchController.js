const searchService = require("../services/searchService");

exports.searchAllUsers = async (request, response, next) => {
    try {
      const data = await searchService.searchAllUsers();
      response.json({ data: data, jumlahData: data.length });
    } catch (error) {
      next(error);
    }
  };
  
  exports.searchByUserEmail = async (request, response, next) => {
    try {
      const data = await searchService.searchUsersByEmail(request.params.email);
      if (!data) {
        next();
      } else {
        response.json({ data });
      }
    } catch (error) {
      next(error);
    }
  };

exports.searchById = async (request, response, next) => {
    try {
      const data = await searchService.searchById(request.params.id);
      console.log(data);
      if (!data) {
        next();
      } else {
        response.json({ data });
      }
    } catch (error) {
      next(error);
    }
  };
  
  exports.searchCommentById = async (request, response, next) => {
    try {
      const data = await searchService.searchCommentId(request.params.id);
      if (!data) { next(); } else { response.json({ data }); }
    } catch (error) {
      next(error);
    }
  };

  exports.searchRecipeId = async (request, response, next) => {
    try {
      const data = await searchService.searchRecipeId(request.params.id);
      if (!data) { next(); } else { response.json({ data }); }
    } catch (error) {
      next(error);
    }
  };

  exports.searchVideoId = async (request, response, next) => {
    try {
      const data = await searchService.searchVideoId(request.params.id);
      if (!data) { next(); } else { response.json({ data }); }
    } catch (error) {
      next(error);
    }
  };
  
  