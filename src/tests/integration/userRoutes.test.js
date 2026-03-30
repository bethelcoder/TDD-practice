const request = require("supertest");
const app = require("../../app.js");

describe("POST /users/register", () => {
  it("should register a user successfully", async () => {
    const response = await request(app)
      .post("/users/register")
      .send({
        name: "Tebogo",
        email: "tebogo@example.com"
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.message).toBe("User registered successfully");
    expect(response.body.user.name).toBe("Tebogo");
    expect(response.body.user.email).toBe("tebogo@example.com");
  });

  it("should return 400 if email is missing", async () => {
    const response = await request(app)
        .post("/users/register")
        .send({
            name: "Tebogo"
        });

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("Email is required");
  });
  
  it("should return 400 if name is missing", async () => {
    const response = await request(app)
      .post("/users/register")
      .send({
        email: "tebogo@example.com"
      });

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("Name is required");
  });
  
});