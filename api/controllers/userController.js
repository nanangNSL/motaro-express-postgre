const usersService = require("../services/userService");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.insert = async (request, response, next) => {
  try {
    const test = request.body.password;
    const hash = bcrypt.hashSync(`${test}`, 10);
    const fileName = request.file.filename;
    const url = `${request.protocol}://${request.get('host')}/public/user/${fileName}`;
    const data = await usersService.insert({
      ...request.body,
      image: url,
      password: `${hash}`,
    });
    response.json({ data });
  } catch (error) {
    next(error);
  }
};

exports.select = async (request, response, next) => {
  try {
    const data = await usersService.select();
    // const token = jwt.sign(
    //   JSON.stringify(data),
    //   "891c4bb79ba4f32c551b7506a97a9ad266e2f179e36a2b461e069615c6a1b557"
    // );
    // console.log(token);
    response.json({ data: data, jumlahData: data.length });
  } catch (error) {
    next(error);
  }
};

exports.selectById = async (request, response, next) => {
  try {
    const data = await usersService.selectById(request.params.id);
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
    console.log(request.file);
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
