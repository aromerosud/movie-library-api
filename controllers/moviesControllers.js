import movie from "../models/movie.js";
import mongoose from "mongoose";

export const getAllMovies = async (req, res) => {
  try {
    const movies = await movie.find();

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


export const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid movie id",
      });
    }

    const movies = await movie.findById(id);

    if (!movies) {
      return res.status(404).json({
        message: "Movie not found",
      });
    }

    res.status(200).json(movies);

  } catch (error) {
    res.status(500).json(error);
  }
};


export const createMovie = async (req, res) => {
  try {
    const movies = await movie.create(req.body);

    res.status(201).json(movies);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


export const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid movie id",
      });
    }

    const movies = await movie.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!movies) {
      return res.status(404).json({
        message: "Movie not found",
      });
    }

    res.status(200).json(movies);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


export const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid movie id",
      });
    }

    const movies = await movie.findByIdAndDelete(id);

    if (!movies) {
      return res.status(404).json({
        message: "Movie not found",
      });
    }

    res.status(204).send();

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};