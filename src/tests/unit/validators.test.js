const { isValidEmail } = require("../../utils/validators");

describe("isValidEmail", () => {
  it("should return true for a valid email", () => {
    expect(isValidEmail("tebogo@example.com")).toBe(true);
  });

  it("should return false for an invalid email", () => {
    expect(isValidEmail("tebogoexample.com")).toBe(false);
  });

  it("should return false for non-string input", () => {
    expect(isValidEmail(null)).toBe(false);
  });
});