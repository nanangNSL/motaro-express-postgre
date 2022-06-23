const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");
require("dotenv").config();
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");

// middleware format
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));

// Image Upload Routes
const imageUpload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "images/");
    },
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf() + "_" + file.originalname);
    },
  }),
});

app.post("/image", imageUpload.single("image"), (req, res) => {
  console.log(req.file);
  res.json("The best image was uploaded🚀");
});

app.get("/image/:filename", (req, res) => {
  const { filename } = req.params;
  const dirname = path.resolve();
  const fullfilepath = path.join(dirname, "images/" + filename);
  return res.sendFile(fullfilepath);
});

//CRUD user
app.post("/users", async (req, res) => {
  try {
    console.log(req.body);
    const {
      name,
      email,
      phone_number,
      password,
      my_recipe,
      save_recipe,
      like_recipe,
    } = req.body;
    const newUser = await db.query(
      "INSERT INTO users (name,email, phone_number,password,my_recipe,save_recipe,like_recipe ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [name, email, phone_number, password, my_recipe, save_recipe, like_recipe]
    );
    res.json(newUser.rows[0]);
  } catch (error) {
    console.log(new Error("😝 error: " + error.message));
  }
});

app.get("/users", async (req, res) => {
  try {
    const allUser = await db.query("SELECT * FROM userS");
    res.json(allUser.rows);
  } catch (error) {
    console.log(new Error("😝 error: " + error.message));
  }
});

app.get("/users/:id", async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  try {
    const user = await db.query("SELECT * FROM users WHERE user_id = $1", [
      id,
    ]);
    res.json(user.rows[0]);
  } catch (error) {
    console.log(new Error("😝 error: " + error.message));console.error(error);
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      email,
      phone_number,
      password,
      my_recipe,
      save_recipe,
      like_recipe,
    } = req.body;
    const changeUser = await db.query(
      " UPDATE users SET name = $1, email = $2,phone_number = $3, password = $4, my_recipe = $5, save_recipe = $6, like_recipe = $7  WHERE user_id = $8",
      [
        name,
        email,
        phone_number,
        password,
        my_recipe,
        save_recipe,
        like_recipe,
        id,
      ]
    );
    res.json("Profile finished update 😎");
  } catch (error) {
    console.log(new Error("😝 error: " + error.message));
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUsers = await db.query(
      "DELETE FROM users WHERE user_id = $1",
      [id]
    );
    res.json("User has been deleted");
  } catch (error) {
    console.log(new Error("😝 error: " + error.message));
  }
});

//CRUD recipe
app.post("/recipe", async (req, res) => {
  try {
    console.log(req.body);
    const { name_recipe, image_recipe, inggredients, video, comment } = req.body;
    const newRecipe = await db.query(
      "INSERT INTO recipe (name_recipe, image_recipe, inggredients, video, comment) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name_recipe, image_recipe, inggredients, video, comment]
    );
    res.send(newRecipe.rows[0]);
  } catch (error) {
    console.log(new Error("😝 error: " + error.message));
  }
});

app.get("/recipe", async (req, res) => {
  try {
    const allRecipe = await db.query("SELECT * FROM recipe");
    res.json(allRecipe.rows);
  } catch (error) {
    console.log(new Error("😝 error: " + error.message));
  }
});

app.get("/recipe/:id", async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  try {
    const recipe = await db.query(
      "SELECT * FROM recipe WHERE recipe_id = $1",
      [id]
    );
    res.json(recipe.rows[0]);
  } catch (error) {
    console.log(new Error("😝 error: " + error.message));
  }
});

app.put("/recipe/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name_recipe, image_recipe, inggredients, video, comment } = req.body;
    const changeRecipe = await db.query(
      " UPDATE recipe SET name_recipe =$1, image_recipe=$2, inggredients=$3, video=$4, comment=$5 WHERE recipe_id = $6",
      [name_recipe, image_recipe, inggredients, video, comment, id]
    );
    res.json("Recipe finished update 😎");
  } catch (error) {
    console.log(new Error("😝 error: " + error.message));
  }
});

app.delete("/recipe/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteRecipe = await db.query(
      "DELETE FROM recipe WHERE recipe_id = $1",
      [id]
    );
    res.json("Recipe has been deleted");
  } catch (error) {
    console.log(new Error("😝 error: " + error.message));
  }
});

//CRUD comments
app.post("/comment", async (req, res) => {
  try {
    console.log(req.body);
    const { comment } = req.body;
    const newComment = await db.query(
      "INSERT INTO comment (comment) VALUES ($1) RETURNING *",
      [comment]
    );
    res.json(newComment.rows[0]);
  } catch (error) {
    console.log(new Error("😝 error: " + error.message));
  }
});

app.get("/comment", async (req, res) => {
  try {
    const allComment = await db.query("SELECT * FROM comment");
    res.json(allComment.rows);
  } catch (error) {
    console.log(new Error("😝 error: " + error.message));
  }
});

app.get("/comment/:id", async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  try {
    const comment = await db.query(
      "SELECT * FROM comment WHERE comment_id = $1",
      [id]
    );
    res.json(comment.rows[0]);
  } catch (error) {
    console.log(new Error("😝 error: " + error.message));
  }
});

app.put("/comment/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { comment } = req.body;
    const changeComment = await db.query(
      " UPDATE comment SET comment = $1 WHERE comment_id = $2",
      [comment, id]
    );
    res.json("Comments finished update 😎");
  } catch (error) {
    console.log(new Error("😝 error: " + error.message));
  }
});

app.delete("/comment/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteComment = await db.query(
      "DELETE FROM comment WHERE comment_id = $1",
      [id]
    );
    res.json("comment has been deleted");
  } catch (error) {
    console.log(new Error("😝 error: " + error.message));
  }
});

app.listen(process.env.MY_PORT || 5000, () => {
  console.log(
    "Happy hacking on the server, listen on 😎 " + process.env.MY_PORT
  );
});
