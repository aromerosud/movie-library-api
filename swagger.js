import swaggerJsdoc from "swagger-jsdoc";
import {
  movieSchema,
  actorSchema,
  userSchema,
  reviewSchema,
} from "./swaggerSchemas.js";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Movie Library API",
      version: "1.0.0",
      description:
        "RESTful API for managing movies, actors, users, and reviews.",
    },
    servers: [
      {
        url: "https://movie-library-api-qi4u.onrender.com",
        description: "Render (production)",
      },
      { url: "http://localhost:3000", description: "Local server" },
    ],
    tags: [
    {
      name: "Movies",
      description: "Movie management endpoints",
    },
    {
      name: "Actors",
      description: "Actor management endpoints",
    },
    {
      name: "Users",
      description: "User management endpoints",
    },
    {
      name: "Reviews",
      description: "Review management endpoints",
    },
  ],
    components: {
      schemas: {
        Movie: movieSchema,
        Actor: actorSchema,
        User: userSchema,
        Review: reviewSchema,
      },
    },
  },
  apis: ["./routes/*.js"],
};

export const swaggerSpec = swaggerJsdoc(options);
