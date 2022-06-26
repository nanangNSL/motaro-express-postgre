const multer = require("multer");
const glob = require("glob");

const storageAssetUsers = multer.diskStorage({
  destination: (req, res, callback) => {
    callback(null, "asset/images");
  },
  filename: (req, file, callback) => {
    callback(null, new Date().getTime() + "-" + file.originalname);
  },
});

const storageAssetRecipe = multer.diskStorage({
  destination: (req, res, callback) => {
    callback(null, "asset/images");
  },
  filename: (req, file, callback) => {
    callback(null, new Date().getTime() + "-" + file.originalname);
  },
});

const storageAssetVideo = multer.diskStorage({
  destination: (req, res, callback) => {
    callback(null, "asset/video");
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
    console.log("only extension mp4, 3gpp, x-msvideo, x-matroska and video/quicktime are supported");
  }
};

exports.imageUploadUser = multer({
  storage: storageAssetUsers,
  fileFilter: fileFilterImages,
  limits: { fileSize: 1 * 1024 * 1024 },
}).single("image");

exports.imageUploadRecipe = multer({
  storage: storageAssetRecipe,
  fileFilter: fileFilterImages,
  limits: { fileSize: 1 * 1024 * 1024 },
}).single("image");

exports.imageUploadVideos = multer({
  storage: storageAssetVideo,
  fileFilter: fileFilterVideos,
  limits: { fileSize: 100 * 1024 * 1024 },
}).single("video");











