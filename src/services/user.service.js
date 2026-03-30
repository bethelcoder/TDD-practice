const { isValidEmail } = require("../utils/validators");

const createUser = ({ name, email, password }) => {
  if (!name) {
    throw new Error("Name is required");
  }

  if (!email) {
    throw new Error("Email is required");
  }

  if (!password) {
    throw new Error("Password is required");
  }

  if (!isValidEmail(email)) {
    throw new Error("Email is invalid");
  }

  return {
    id: 1,
    name,
    email
  };
};

module.exports = { createUser };