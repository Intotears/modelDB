module.exports = (sequelize, Sequelize) => {
    const PopularRecipe = sequelize.define(
      "popularRecipe",
      {
        pr_ID: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          
        },
        pr_Name: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
      },
      {
        timestamps: false,
        freezeTableName: true,
      }
    );
  
    return PopularRecipe;
  };
  