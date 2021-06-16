const db = require("../config/db.config.js");
const User = db.user;

// Post a Book
exports.create = (req, res) => {
  User.create({
    name: req.body.name,
    username: req.body.username,
    userEmail: req.body.userEmail,
    userPassword: req.body.userPassword,
  }).then((user) => {
    res.status(200).json({
      status: true,
      message: "User registering successfully",
    });
  });
};
