import swaggerJsdoc from "swagger-jsdoc";
import { movieSchema, actorSchema } from "./swaggerSchemas.js";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Movie Library API",
      version: "1.0.0",
      description: "RESTful API for managing movies, actors, users, and reviews.",
    },
    servers: [
      { url: "http://localhost:3000", description: "Local server" },
      { url: "https://movie-library-api-qi4u.onrender.com", description: "Render (production)" },
    ],
    components: {
      schemas: {
        Movie: movieSchema,
        Actor: actorSchema,
      },
    },
  },
  apis: ["./routes/*.js"],
};

export const swaggerSpec = swaggerJsdoc(options);