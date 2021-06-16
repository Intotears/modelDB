module.exports = (sequelize, Sequelize) => {
    const Unit = sequelize.define(
      "unit",
      {
          unitID: {
          type: Sequelize.STRING(10),
          primaryKey: true,
          allowNull: false,
          
        },
        unitName: {
          type: Sequelize.STRING(100),
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
  