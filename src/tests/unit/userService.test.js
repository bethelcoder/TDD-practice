const { createUser } = require("../../services/user.service");

describe("createUser", () => {
  it("should create a user when valid data is provided", () => {
    const user = createUser({
      name: "Tebogo",
      email: "tebogo@example.com",
      password: "123456"
    });

    expect(user.id).toBe(1);
    expect(user.name).toBe("Tebogo");
    expect(user.email).toBe("tebogo@example.com");
  });

  //Throw error on missing name
  it("should throw an error if name is missing", () => {
    expect(() =>
      createUser({
        email: "tebogo@example.com",
        password: "123456"
      })
    ).toThrow("Name is required");
  });

  //Throw error on missing email
  it("should throw an error if email is missing", () => {
    expect(() =>
      createUser({
        name: "Tebogo",
        password: "123456"
      })
    ).toThrow("Email is required");
  });

  //Throw error on missing password
  it("should throw an error if password is missing", () => {
    expect(() => 
      createUser({
        name: "Tebogo",
        email: "tebogo@example.com"
      })
    ).toThrow("Password is required");
  });

  //Throw error on invalid email
  it("should throw an error if email is invalid", () => {
    expect(() => 
      createUser({
        name: "Tebogo",
        password: "123456",
        email: "invalid-email"
      })
    ).toThrow("Email is invalid");
  });

  
  
});