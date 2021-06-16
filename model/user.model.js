module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "user",
    {
      userID: {
        type: Sequelize.STRING(255),
        primaryKey: true,
        allowNull: false,
        
      },
      userName: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      userUsername: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
      },
      userEmail: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true,
      },
      userPassword: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  return User;
};
