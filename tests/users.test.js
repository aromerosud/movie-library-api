import request from "supertest";
import app from "../server.js";

import mongoose from "mongoose";

describe("Users API", () => {
  test("GET /users should require authentication", async () => {
    const response = await request(app).get("/users");

    expect(response.statusCode).toBe(401);
  });

  test("GET /users/:id should require authentication", async () => {
    const userId = "6a70b8e134881f490f22edec";

    const response = await request(app).get(`/users/${userId}`);

    expect(response.statusCode).toBe(401);
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});