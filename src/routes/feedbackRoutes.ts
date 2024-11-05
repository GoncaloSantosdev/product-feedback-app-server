import express from "express";
const router = express.Router();
// Controllers
import {
  createFeedback,
  deleteFeedback,
  getFeedback,
  getFeedbacks,
  updateFeedback,
} from "../controllers/feedbackControllers";

router.route("/").get(getFeedbacks);
router
  .route("/:id")
  .get(getFeedback)
  .put(updateFeedback)
  .delete(deleteFeedback);
router.route("/create").post(createFeedback);

export default router;
