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

import session from "express-session";
import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//OAuth
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    },
  ),
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Middleware
app.use(cors());
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET || "library-api-secret",
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use("/", authRoutes);
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
connectDB();

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;
