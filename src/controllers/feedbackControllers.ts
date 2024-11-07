import { Request, Response, NextFunction } from "express";
import Feedback from "../models/Feedback";

// Async handler utility function
const asyncHandler =
  (fn: Function) => (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);

// @desc    Create Feedback
// @route   POST /api/feedbacks/create
// @access  Private
const createFeedback = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const feedbackData = req.body;

    // Check if feedback with the same title already exists
    const feedbackAlreadyExists = await Feedback.findOne({
      title: feedbackData.title,
    });

    if (feedbackAlreadyExists) {
      // Throw an error if it exists
      throw new Error("A feedback with that title already exists.");
    }

    // Create the new feedback
    const createdFeedback = await Feedback.create(feedbackData);

    res.status(201).json({
      status: "success",
      message: "Feedback created successfully",
      feedback: createdFeedback,
    });
  }
);

// @desc    Get Feedbacks
// @route   GET /api/feedbacks
// @access  Private
const getFeedbacks = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const feedbacks = await Feedback.find();

    res.status(200).json({
      status: "success",
      message: "Feedbacks fetched successfully",
      feedbacks,
    });
  }
);

// @desc    Get Feedback
// @route   GET /api/feedbacks/:id
// @access  Private
const getFeedback = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
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
  }
);

// @desc    Update Feedback
// @route   PUT /api/feedbacks/:id
// @access  Private
const updateFeedback = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const feedbackId = req.params.id;

    const feedback = await Feedback.findById(feedbackId);

    if (!feedback) {
      res.status(404).json({
        status: "fail",
        message: "Feedback not found",
      });
    }

    const updatedFeedback = await Feedback.findByIdAndUpdate(
      feedbackId,
      {
        title: req.body.title,
        category: req.body.category,
        status: req.body.status,
        description: req.body.description,
      },
      { new: true }
    );

    res.status(200).json({
      status: "success",
      message: "Feedback updated successfully",
      updatedFeedback,
    });
  }
);

// @desc    Delete Feedback
// @route   DELETE /api/feedbacks/:id
// @access  Private
const deleteFeedback = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const feedbackId = req.params.id;

    const feedback = await Feedback.findById(feedbackId);

    if (!feedback) {
      res.status(404).json({
        status: "fail",
        message: "Feedback not found",
      });
    }

    await Feedback.findByIdAndDelete(feedbackId);

    res.status(200).json({
      status: "success",
      message: "Feedback deleted successfully",
    });
  }
);

export {
  createFeedback,
  getFeedbacks,
  getFeedback,
  updateFeedback,
  deleteFeedback,
};
