module.exports = function (app) {
  
    const recipe = require("../controller/recipe.controller.js");
    const user = require("../controller/user.controller.js");

    // Create a new recipe
    app.post("/api/recipe", recipe.create);
    app.post("/api/register", user.create);

  };
  