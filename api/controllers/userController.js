const usersService = require("../services/userService");
const bcrypt = require("bcrypt");

exports.insert = async (request, response, next) => {
  try {
    const test = request.body.password;
    const hash = bcrypt.hashSync(`${test}`, 10);

    const data = await usersService.insert({
      ...request.body,
      image: request.file.path,
      password: `${hash}`,
    });
    response.json({ data });
  } catch (error) {
    next(error);
  }
};

exports.selectById = async (request, response, next) => {
  try {
    const data = await usersService.selectById(request.params.id);
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


exports.update = async (request, response, next) => {
  try {
    const test = request.body.password;
    const hash = bcrypt.hashSync(`${test}`, 10);

    const data = await usersService.update(request.params.id,{
      ...request.body,
      image: request.file.path,
      password: `${hash}`,
    });
  
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
    const data = await usersService.delete(request.params.id);
    if (!data) {
      next();
    } else {
      response.json({ data });
    }
  } catch (error) {
    next(error);
  }
};
