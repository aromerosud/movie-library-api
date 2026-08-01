import express from "express";

import {
  getAllActors,
  getActorById,
  createActor,
  updateActor,
  deleteActor,
} from "../controllers/actorsControllers.js";

import { isAuthenticated } from "../middleware/authenticate.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Actors
 *   description: Actor management endpoints
 */

/**
 * @swagger
 * /actors:
 *   get:
 *     summary: Get all actors
 *     tags: [Actors]
 *     responses:
 *       200:
 *         description: List of actors
 */
router.get("/", getAllActors);

/**
 * @swagger
 * /actors/{id}:
 *   get:
 *     summary: Get actor by id
 *     tags: [Actors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Actor found
 *       400:
 *         description: Invalid actor id
 *       404:
 *         description: Actor not found
 */
router.get("/:id", getActorById);

/**
 * @swagger
 * /actors:
 *   post:
 *     summary: Create a new actor
 *     description: Requires GitHub OAuth authentication.
 *     tags: [Actors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Actor'
 *     responses:
 *       201:
 *         description: Actor created successfully
 *       500:
 *         description: Server error
 */
router.post("/", isAuthenticated, createActor);

/**
 * @swagger
 * /actors/{id}:
 *   put:
 *     summary: Update an actor
 *     description: Requires GitHub OAuth authentication.
 *     tags: [Actors]
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
 *             $ref: '#/components/schemas/Actor'
 *     responses:
 *       200:
 *         description: Actor updated
 *       400:
 *         description: Invalid actor id
 *       404:
 *         description: Actor not found
 */
router.put("/:id", isAuthenticated, updateActor);

/**
 * @swagger
 * /actors/{id}:
 *   delete:
 *     summary: Delete an actor
 *     description: Requires GitHub OAuth authentication.
 *     tags: [Actors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Actor ObjectId
 *     responses:
 *       204:
 *         description: Actor deleted successfully
 *       400:
 *         description: Invalid actor id
 *       404:
 *         description: Actor not found
 *       500:
 *         description: Server error
 */
router.delete("/:id", isAuthenticated, deleteActor);

export default router;