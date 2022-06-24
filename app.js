const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./base/db");
require("dotenv").config();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const multer = require("multer");

const fileStorage = multer.diskStorage({
  destination: (req, res, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    callback(null, new Date().getTime() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, callback) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    callback(null, true);
  } else {
    callback(null, false);
    console.log("Only extension png, jpg and jpeg are supported");
  }
};

const addUsers = require("./router/routeUser");

// middleware format
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  multer({
    storage: fileStorage,
    fileFilter: fileFilter,
    limits: { fileSize: 1 * 1024 * 1024 },
  }).single("image")
);
app.use("/", addUsers);

app.listen(process.env.MY_PORT || 5000, () => {
  console.log(
    "Happy hacking on the server, listen on 😎 " + process.env.MY_PORT
  );
});
