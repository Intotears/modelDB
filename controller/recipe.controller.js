const db = require("../config/db.config.js");
const Recipe = db.recipe;

// Post a Book
exports.create = (req, res) => {
  Recipe.create({
    // recipeID: req.body.recipeID,
    recipeName : req.body.recipeName,
    description: req.body.description,
    time: req.body.time,
    shareOption: req.body.shareOption,
    serveNumber: req.body.serveNumber,
  }).then((recipe) => {
    res.status(200).json({
      status: true,
      message: "Recipe created successfully",
    });
  });
};
