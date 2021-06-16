module.exports = (sequelize, Sequelize) => {
  const Recipe = sequelize.define(
    "recipe",
    {
      recipeID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        
      },
      recipeName: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(200),
      },
      time: {
        type: Sequelize.STRING(10),
      },
      shareOption: {
        type: Sequelize.BOOLEAN,
      },
      serveNumber: {
        type: Sequelize.INTEGER,
      },
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  );

  return Recipe;
};