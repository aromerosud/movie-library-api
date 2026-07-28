import express from "express";

import {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/moviesControllers.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: Movie management endpoints
 */

/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Get all movies
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: List of movies
 */
router.get("/", getAllMovies);

/**
 * @swagger
 * /movies/{id}:
 *   get:
 *     summary: Get movie by id
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Movie found
 *       400:
 *         description: Invalid movie id
 *       404:
 *         description: Movie not found
 */
router.get("/:id", getMovieById);

/**
 * @swagger
 * /movies:
 *   post:
 *     summary: Create a new movie
 *     description: Requires GitHub OAuth authentication.
 *     tags: [Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       201:
 *         description: Movie created successfully
 *       500:
 *         description: Server error
 */
router.post("/", createMovie);

/**
 * @swagger
 * /movies/{id}:
 *   put:
 *     summary: Update a movie
 *     description: Requires GitHub OAuth authentication.
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       200:
 *         description: Movie updated
 *       400:
 *         description: Invalid movie id
 *       404:
 *         description: Movie not found
 */
router.put("/:id", updateMovie);

/**
 * @swagger
 * /movies/{id}:
 *   delete:
 *     summary: Delete a movie
 *     description: Requires GitHub OAuth authentication.
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Movie ObjectId
 *     responses:
 *       204:
 *         description: Movie deleted successfully
 *       400:
 *         description: Invalid movie id
 *       404:
 *         description: Movie not found
 *       500:
 *         description: Server error
 */
router.delete("/:id", deleteMovie);

export default router;