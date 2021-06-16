module.exports = function (app) {
  
    const recipe = require("../controller/recipe.controller.js");
    const book = require("../controller/book.controller.js");

    // Create a new book
    app.post("/api/recipe", recipe.create);

    app.post("/api/book", book.create);
    
  };
  