const { createUser } = require("../services/user.service");

const registerUser = (req, res) => {
  try {
    const user = createUser(req.body);

    return res.status(201).json({
      message: "User registered successfully",
      user
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message
    });
  }
};

module.exports = { registerUser };