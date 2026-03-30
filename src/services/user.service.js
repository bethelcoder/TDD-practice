const { isValidEmail } = require("../utils/validators");

const createUser = ({ name, email }) => {
  if (!name) {
    throw new Error("Name is required");
  }

  if (!email) {
    throw new Error("Email is required");
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