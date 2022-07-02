const multer = require("multer");
const path = require("path");

const storageUser = path.join(__dirname, "../../asset/image-user");
const storageRecipe = path.join(__dirname, "../../asset/image-recipe");
const storageVideo = path.join(__dirname, "../../asset/video");

const assetUsers = multer.diskStorage({
    destination: (req, res, callback) => {
    callback(null, storageUser);
  },
  filename: (req, file, callback) => {
    callback(null, new Date().getTime() + "-" + file.originalname);
  },
});

const assetRecipe = multer.diskStorage({
  destination: (req, res, callback) => {
    callback(null, storageRecipe);
  },
  filename: (req, file, callback) => {
    callback(null, new Date().getTime() + "-" + file.originalname);
  },
});

const assetVideo = multer.diskStorage({
  destination: (req, res, callback) => {
    callback(null, storageVideo);
  },
  filename: (req, file, callback) => {
    callback(null, new Date().getTime() + "-" + file.originalname);
  },
});

const fileFilterImages = (req, file, callback) => {
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

const fileFilterVideos = (req, file, callback) => {
  if (
    file.mimetype == "video/mp4" ||
    file.mimetype == "video/3gpp" ||
    file.mimetype == "video/x-msvideo" ||
    file.mimetype == "video/x-matroska" ||
    file.mimetype == "video/quicktime"
  ) {
    callback(null, true);
  } else {
    callback(null, false);
    console.log(
      "only extension mp4, 3gpp, x-msvideo, x-matroska and video/quicktime are supported"
    );
  }
};

exports.imageUploadUser = multer({
  storage: assetUsers,
  fileFilter: fileFilterImages,
  limits: { fileSize: 1 * 1024 * 1024 },
}).single("image");

exports.imageUploadRecipe = multer({
  storage: assetRecipe,
  fileFilter: fileFilterImages,
  limits: { fileSize: 1 * 1024 * 1024 },
}).single("image");

exports.imageUploadVideos = multer({
  storage: assetVideo,
  fileFilter: fileFilterVideos,
  limits: { fileSize: 15 * 1024 * 1024 },
}).single("video");
