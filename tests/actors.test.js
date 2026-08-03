import request from "supertest";
import app from "../server.js";

import mongoose from "mongoose";

describe("Actors API", () => {
  test("GET /actors should return status 200", async () => {
    const response = await request(app).get("/actors");

    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  test("GET /actors/:id should return status 200", async () => {
    const actorId = "6a67e72c6a20bdfc5f1f5717";

    const response = await request(app).get(`/actors/${actorId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("_id");
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});
