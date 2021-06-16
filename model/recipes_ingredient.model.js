module.exports = (sequelize, Sequelize) => {
    const RecipesIngredient = sequelize.define(
      "recipesIngredient",
      {
       re_IngredientsID: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          
        },
        quantityValue: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        timestamps: false,
        freezeTableName: true,
      }
    );
  
    return RecipesIngredient;
  };
  