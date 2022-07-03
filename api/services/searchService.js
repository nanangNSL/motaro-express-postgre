const searchModel = require('../models/searchModel');
const motaroValidator = require('../validators/motaroValidator');


exports.searchAll = async () => {
    const posts = await searchModel.searchAll();
    return posts;
  };

exports.searchByEmail = async (email) => {
    const posts = await searchModel.searchByEmail(email);
    return posts;
  };

exports.searchToken = async (refresh_token) => {
    const posts = await searchModel.searchToken(refresh_token);
    return posts;
  };


// exports.searchByName = async (data) => {
//     const posts = await searchModel.searchByName(data);
//     return posts;
//   };