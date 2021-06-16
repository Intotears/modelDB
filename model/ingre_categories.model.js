module.exports = (sequelize, Sequelize) => {
    const IngreCategories = sequelize.define(
      "ingreCategories",
      {
        categoryID: {
          type: Sequelize.STRING(10),
          primaryKey: true,
          allowNull: false,
          
        },
        categoryName: {
          type: Sequelize.STRING(100),
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
  