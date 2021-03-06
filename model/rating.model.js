module.exports = (sequelize, Sequelize) => {
    const Rating = sequelize.define(
      "rating",
      {
        ratingID: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          
        },
        ratingStars: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
      },
      {
        timestamps: false,
        freezeTableName: true,
      }
    );
  
    return Rating;
  };
  