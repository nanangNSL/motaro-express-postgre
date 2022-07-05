const searchService = require("../services/searchService");
const usersService = require("../services/userService");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { request } = require("express");

exports.Register = async (req, res, next) => {
  const { name, email, phonenumber, password, confPassword } = req.body;
  if (password !== confPassword)
    return res
      .status(400)
      .json({ msg: "Password and Confirm Password do not match" });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    const data = await usersService.register({
      name: name,
      email: email,
      phonenumber: phonenumber,
      password: hashPassword,
    });
    res.json({ msg: "Register succes", data: data });
  } catch (error) {
    next(error);
  }
};

exports.Login = async (request, response, next) => {
  try {
    const { email, password } = request.body;
    const data = await searchService.searchUsersByEmail(email);
    if (data[0].email) {
      const checkPasswrod = bcrypt.compareSync(password, data[0].password);
      if (checkPasswrod) {
        const userId = data[0].id;
        const name = data[0].name;
        const email = data[0].email;
        const token = jwt.sign(
          { userId, name, email },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "24s" }
        );
        const refreshToken = jwt.sign(
          { userId, name, email },
          process.env.REFRESH_TOKEN_SECRET,
          {
            expiresIn: "1d",
          }
        );
        await usersService.updateToken({ refresh_token: refreshToken },
          {
            where: {
              id: userId,
            },
          }
        );
        response.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000,
        });
        response.status(200).send(`tokenKey=${token}`);
      } else {
        response.status(401).send("password is not valid");
      }
    } else {
      response.status(400).send("User not found");
    }
  } catch (error) {
    next(error);
  }
};

exports.Logout = async (request, response, next) => {
  try {
    const refreshToken = request.cookies.refreshToken;
        if(!refreshToken) return response.sendStatus(204);
        const data  = await searchService.searchToken(refreshToken);
        if(!data[0]) return response.sendStatus(204);

    if (!data[0]) return response.sendStatus(204);
    const userId = data[0].id;
    await usersService.updateToken({ refresh_token: refreshToken },
      {
        where: {
          id: userId,
        },
      }
    );
    response.clearCookie("refreshToken");
    return response.sendStatus(200);
  } catch (error) {
    next(error);
  }
};
