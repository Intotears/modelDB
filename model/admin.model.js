module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define(
      "admin",
      {
        adminID: {
          type: Sequelize.STRING(255),
          primaryKey: true,
          allowNull: false,
          
        },
        adminName: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        adminUsername: {
          type: Sequelize.STRING(255),
          allowNull: false,
          unique: true,
        },
        adminPassword: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
      },
      {
        timestamps: false,
        freezeTableName: true,
      }
    );
  
    return Admin;
  };
  