module.exports = function (app) {
  
    const recipe = require("../controller/recipe.controller.js");
    
    // Create a new recipe
    app.post("/api/recipe", recipe.create);

  };
  