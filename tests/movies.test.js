import request from "supertest";
import app from "../server.js";

import mongoose from "mongoose";

describe("Movies API", () => {
  test("GET /movies should return status 200", async () => {
    const response = await request(app).get("/movies");

    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  test("GET /movies/:id should return status 200", async () => {
    const movieId = "6a67e7c26a20bdfc5f1f5725";

    const response = await request(app).get(`/movies/${movieId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("_id");
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});
