module.exports = (sequelize, Sequelize) => {
    const Emoji = sequelize.define(
      "emoji",
      {
        emojiID: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          
        },
        emojiDetail: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
      },
      {
        timestamps: false,
        freezeTableName: true,
      }
    );
  
    return Emoji;
  };
  