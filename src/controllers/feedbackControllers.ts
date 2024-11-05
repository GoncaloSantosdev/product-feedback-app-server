import { Request, Response } from "express";
import Feedback from "../models/Feedback";

// @desc    Create Feedback
// @route   POST /api/feedbacks/create
// @access  Private
const createFeedback = async (req: Request, res: Response): Promise<void> => {
  try {
    const feedback = req.body;

    const createdFeedback = await Feedback.create(feedback);

    res.status(201).json({
      status: "success",
      message: "Feedback created successfully",
      feedback: createdFeedback,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// @desc    Get Feedbacks
// @route   GET /api/feedbacks
// @access  Private
const getFeedbacks = async (req: Request, res: Response): Promise<void> => {
  try {
    const feedbacks = await Feedback.find();

    res.status(200).json({
      status: "success",
      message: "Feedbacks fetched successfully",
      feedbacks,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// @desc    Get Feedback
// @route   GET /api/feedbacks/:id
// @access  Private
const getFeedback = async (req: Request, res: Response): Promise<void> => {
  try {
    const feedbackId = req.params.id;

    const feedback = await Feedback.findById(feedbackId);

    if (!feedback) {
      res.status(404).json({
        status: "fail",
        message: "Feedback not found",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Feedback fetched successfully",
      feedback,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// @desc    Update Feedback
// @route   PUT /api/feedbacks/:id
// @access  Private
const updateFeedback = async (req: Request, res: Response): Promise<void> => {
  res.json({ message: "Update feedback" });
};

// @desc    Delete Feedback
// @route   DELETE /api/feedbacks/:id
// @access  Private
const deleteFeedback = async (req: Request, res: Response): Promise<void> => {
  res.json({ message: "Delete feedback" });
};

export {
  createFeedback,
  getFeedbacks,
  getFeedback,
  updateFeedback,
  deleteFeedback,
};
