const db = require("../base/db");

module.exports = {
  addUser: function (props) {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO users (name, image, email, phonenumber, password, my_recipe, save_recipe, like_recipe) VALUES($1, $2, $3, $4, $5, $6, $7, $8)`,
        [
          props.name,
          props.image,
          props.email,
          props.phonenumber,
          props.password,
          props.my_recipe,
          props.save_recipe,
          props.like_recipe,
        ],
        (error, result) => {
          if (error) {
            reject(new Error("addUser module : " + error));
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  getUserAll: function (req, res) {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM users"),
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        };
    });
  },
};
