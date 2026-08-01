import express from "express";
import {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
} from "../controllers/reviewsControllers.js";

import { isAuthenticated } from "../middleware/authenticate.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Review management endpoints
 */

/**
 * @swagger
 * /reviews:
 *   get:
 *     summary: Get all reviews
 *     tags: [Reviews]
 *     responses:
 *       200:
 *         description: List of reviews
 *       500:
 *         description: Server error
 */
router.get("/", getAllReviews);

/**
 * @swagger
 * /reviews/{id}:
 *   get:
 *     summary: Get review by id
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Review found
 *       400:
 *         description: Invalid review id
 *       404:
 *         description: Review not found
 *       500:
 *         description: Server error
 */
router.get("/:id", getReviewById);

/**
 * @swagger
 * /reviews:
 *   post:
 *     summary: Create a new review
 *     description: Requires GitHub OAuth authentication.
 *     tags: [Reviews]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Review'
 *     responses:
 *       201:
 *         description: Review created successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
router.post("/", isAuthenticated, createReview);

/**
 * @swagger
 * /reviews/{id}:
 *   put:
 *     summary: Update a review
 *     description: Requires GitHub OAuth authentication.
 *     tags: [Reviews]
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
 *             $ref: '#/components/schemas/Review'
 *     responses:
 *       200:
 *         description: Review updated successfully
 *       400:
 *         description: Validation error
 *       404:
 *         description: Review not found
 *       500:
 *         description: Server error
 */
router.put("/:id", isAuthenticated, updateReview);

/**
 * @swagger
 * /reviews/{id}:
 *   delete:
 *     summary: Delete a review
 *     description: Requires GitHub OAuth authentication.
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Review ObjectId
 *     responses:
 *       200:
 *         description: Review deleted successfully
 *       400:
 *         description: Invalid review id
 *       404:
 *         description: Review not found
 *       500:
 *         description: Server error
 */
router.delete("/:id", isAuthenticated, deleteReview);

export default router;