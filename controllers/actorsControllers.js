import actor from "../models/actor.js";
import mongoose from "mongoose";

export const getAllActors = async (req, res) => {
  try {
    const actors = await actor.find();

    res.status(200).json(actors);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


export const getActorById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid actor id",
      });
    }

    const actors = await actor.findById(id);

    if (!actors) {
      return res.status(404).json({
        message: "Actor not found",
      });
    }

    res.status(200).json(actors);

  } catch (error) {

    res.status(500).json(error);

  }
};


export const createActor = async (req, res) => {
  try {

    const actors = await actor.create(req.body);

    res.status(201).json(actors);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


export const updateActor = async (req, res) => {
  try {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid actor id",
      });
    }

    const actors = await actor.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!actors) {
      return res.status(404).json({
        message: "Actor not found",
      });
    }

    res.status(200).json(actors);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


export const deleteActor = async (req, res) => {
  try {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid actor id",
      });
    }

    const actors = await actor.findByIdAndDelete(id);

    if (!actors) {
      return res.status(404).json({
        message: "Actor not found",
      });
    }

    res.status(204).send();

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};