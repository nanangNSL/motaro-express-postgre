const Router = require("express").Router();
const db = require("../base/db");
const controller = require("../controller/controllerUser");

Router.post("/users/add", controller.addUser);
Router.get("/users/search", controller.getUserAll);


module.exports = Router;
