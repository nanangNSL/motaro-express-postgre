const searchService = require("../services/searchService");
// const paginate = require('express-paginate');
// const recipeService = require('../services/recipeServices');
// const commentService = require('../services/commentService');

exports.searchAll = async (request, response, next) => {
    try {
      const data = await searchService.searchAll();
      response.json({ data: data, jumlahData: data.length });
    } catch (error) {
      next(error);
    }
  };
  
  exports.searchByEmail = async (request, response, next) => {
    try {
      const data = await searchService.searchByEmail(request.params.email);
      response.json({ data: data, jumlahData: data.length });
      if (!data) {
        next();
      } else {
        response.json({ data });
      }
    } catch (error) {
      next(error);
    }
  };
  
  // exports.searchByName = async (request, response, next) => {
  //   try {
  //     console.log(request.params);
  //     const data = await searchService.searchByName(request.params.name);
  //     response.json({ data: data, jumlahData: data.length });
  //     if (!data) {
  //       next();
  //     } else {
  //       response.json({ data });
  //     }
  //   } catch (error) {
  //     next(error);
  //   }
  // };
  