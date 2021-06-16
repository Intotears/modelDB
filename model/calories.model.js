module.exports = (sequelize, Sequelize) => {
  const Calories = sequelize.define(
    "calories",
    {
      calorieID: {
        type: Sequelize.STRING(255),
        primaryKey: true,
        allowNull: false,
        
      },
      constantValue: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      numberOfCalorie: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  return Calories;
};
