const model = require("../model/modelUser");
const CryptoJS = require("crypto-js");

module.exports = {
  addUser: async (req, res) => {
    try {
      const {
        name,
        image,
        email,
        phonenumber,
        password,
        my_recipe,
        save_recipe,
        like_recipe,
      } = req.body;
      let ciphertext = CryptoJS.AES.encrypt(password, "nanangNSL").toString();
      const imageProfile = req.file.path;
      const addUser = await model.addUser({
        name,
        image: imageProfile,
        email,
        phonenumber,
        password: ciphertext,
        my_recipe,
        save_recipe,
        like_recipe,
      });
      res.json(addUser.rows[0]);
    } catch (error) {
      console.log("addUser controller error: " + error.message);
    }
  },
  getUserAll : async (req, res) =>{
    try {
      const userAll = await model.getUserAll();
      res.json(userAll.rows);
    } catch (error) {
      console.log("getUserAll controller error: " + error.message);
    }
  }
};
