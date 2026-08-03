import request from "supertest";
import app from "../server.js";

import mongoose from "mongoose";

describe("Reviews API", () => {
  test("GET /reviews should return status 200", async () => {
    const response = await request(app).get("/reviews");

    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  test("GET /reviews/:id should return status 200", async () => {
    const reviewId = "6a6ac96181397ea0bca4d303";

    const response = await request(app).get(`/reviews/${reviewId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("_id");
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});