const searchModel = require('../models/searchModel');
const motaroValidator = require('../validators/motaroValidator');


exports.searchAllUsers = async () => {
    const posts = await searchModel.searchAllUsers();
    return posts;
  };

exports.searchUsersByEmail = async (email) => {
    const posts = await searchModel.searchUserByEmail(email);
    return posts;
  };

exports.searchById = async (id) => {
    const post = await searchModel.searchById(id);
    return post;
  };
  
  exports.searchCommentId = async (id) => {
    const post = await searchModel.searchComentID(id);
    return post;
  };

  exports.searchRecipeId = async (id) => {
    const post = await searchModel.searchRecipeId(id);
    return post;
  };

  exports.searchVideoId = async (id) => {
    const post = await searchModel.searchVideoId(id);
    return post;
  };
  

exports.searchToken = async (refresh_token) => {
    const posts = await searchModel.searchToken(refresh_token);
    return posts;
  };


// exports.searchByName = async (data) => {
//     const posts = await searchModel.searchByName(data);
//     return posts;
//   };