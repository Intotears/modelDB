module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "user",
    {
      userID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      Name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
      },
      userEmail: {
        type: Sequelize.STRING(255),
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
