import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

import { connectDB } from "./data/database.js";
import moviesRoutes from "./routes/movies.js";
import actorsRoutes from "./routes/actors.js";
import usersRoutes from "./routes/users.js";
import reviewsRoutes from "./routes/reviews.js";
import { swaggerSpec } from "./swagger.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use("/movies", moviesRoutes);
app.use("/actors", actorsRoutes);
app.use("/users", usersRoutes);
app.use("/reviews", reviewsRoutes);

// Home
app.get("/", (req, res) => {
  res.send("Movie Library API is running...");
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

// Start Server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});