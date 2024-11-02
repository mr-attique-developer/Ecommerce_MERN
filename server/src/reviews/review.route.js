import express from "express"
import { countReviewControllor, createReviewController, getReviewController } from "./review.controller.js"

const router = express.Router()

router.route("/create-review").post(createReviewController)
router.route("/count-review").get(countReviewControllor)
router.route("/:userId").get(getReviewController)

export default router