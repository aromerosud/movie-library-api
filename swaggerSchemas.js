export const movieSchema = {
  type: "object",
  required: ["title", "releaseYear", "genre"],
  properties: {
    title: { type: "string", example: "Inception" },
    releaseYear: { type: "integer", example: 2010 },
    genre: { type: "string", example: "Sci-Fi" },
    director: { type: "string", example: "Christopher Nolan" },
    duration: {
      type: "integer",
      example: 148,
      description: "Duration in minutes",
    },
    rating: { type: "number", example: 8.8 },
    description: {
      type: "string",
      example:
        "A thief who steals corporate secrets through dream-sharing technology.",
    },
    available: { type: "boolean", example: true },
  },
};

export const actorSchema = {
  type: "object",
  properties: {
    firstName: { type: "string", example: "Leonardo" },
    lastName: { type: "string", example: "DiCaprio" },
    birthDate: { type: "string", format: "date", example: "1974-11-11" },
    nationality: { type: "string", example: "American" },
    biography: {
      type: "string",
      example: "Known for intense character roles.",
    },
  },
};
