module.exports = {
  testEnvironment: "node",
  testMatch: ["**/*.test.js"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js"],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 70,
      functions: 80,
      lines: 80
    }
  }
};