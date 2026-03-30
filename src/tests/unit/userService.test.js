const { createUser } = require("../../services/user.service");

describe("createUser", () => {
  it("should create a user when valid data is provided", () => {
    const user = createUser({
      name: "Tebogo",
      email: "tebogo@example.com"
    });

    expect(user.id).toBe(1);
    expect(user.name).toBe("Tebogo");
    expect(user.email).toBe("tebogo@example.com");
  });

  it("should throw an error if name is missing", () => {
    expect(() =>
      createUser({
        email: "tebogo@example.com"
      })
    ).toThrow("Name is required");
  });

  it("should throw an error if email is missing", () => {
    expect(() =>
      createUser({
        name: "Tebogo"
      })
    ).toThrow("Email is required");
  });

  it("should throw an error if email is invalid", () => {
    expect(() => 
      createUser({
        name: "Tebogo",
        email: "invalid-email"
      })
    ).toThrow("Email is invalid");
  });
  
});