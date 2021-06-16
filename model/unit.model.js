module.exports = (sequelize, Sequelize) => {
    const Unit = sequelize.define(
      "unit",
      {
          unitID: {
          type: Sequelize.STRING(255),
          primaryKey: true,
          allowNull: false,
          
        },
        unitName: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
      },
      {
        timestamps: false,
        freezeTableName: true,
      }
    );
  
    return Unit;
  };
  