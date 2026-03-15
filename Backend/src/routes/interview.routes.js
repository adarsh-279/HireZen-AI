import express from "express"
import authMiddleware from "../middlewares/auth.middleware.js"
import interviewcontroller from "../controllers/interviewcontroller.js"
import uploadResume from "../middlewares/file.middleware.js"

const interviewRouter = express.Router()

/**
 * @route POST /api/interview/
 * @description generate new interview report on the basis of user self description, resume and job description
 * @access Private
 */

interviewRouter.post("/", authMiddleware.authUser, uploadResume.single("resume"), interviewcontroller.generateInterviewReportController )

export default interviewRouter