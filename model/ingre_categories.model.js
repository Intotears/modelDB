module.exports = (sequelize, Sequelize) => {
    const IngreCategories = sequelize.define(
      "ingreCategories",
      {
        categoryID: {
          type: Sequelize.STRING(255),
          primaryKey: true,
          allowNull: false,
          
        },
        categoryName: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
      },
      {
        timestamps: false,
        freezeTableName: true,
      }
    );
  
    return IngreCategories;
  };
  