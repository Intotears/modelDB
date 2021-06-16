module.exports = (sequelize, Sequelize) => {
  const All_Ingredients = sequelize.define(
    "all_Ingredients",
    {
        ingredientID: {
        type: Sequelize.STRING(10),
        primaryKey: true,
        allowNull: false,
        
      },
      ingredientName: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  return All_Ingredients;
};
