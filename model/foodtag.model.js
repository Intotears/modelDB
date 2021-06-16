module.exports = (sequelize, Sequelize) => {
    const FoodTag = sequelize.define(
      "foodtag",
      {
          tagID: {
          type: Sequelize.STRING(255),
          primaryKey: true,
          allowNull: false,
          
        },
        tagName: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
      },
      {
        timestamps: false,
        freezeTableName: true,
      }
    );
  
    return FoodTag;
  };
  