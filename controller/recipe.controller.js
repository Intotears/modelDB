const db = require("../config/db.config.js");
const Recipe = db.recipes;

// Post a Book
exports.create = (req, res) => {
  Recipe.create({
    // rep_id: req.body.recipeID,
    recipename : req.body.recipeName,
    description: req.body.description,
    cooking_time: req.body.cooking_time,
    serveNumber: req.body.serveNumber,
  }).then((recipe) => {
    res.status(200).json({
      status: true,
      message: "Recipe created successfully",
    });
  });
};
