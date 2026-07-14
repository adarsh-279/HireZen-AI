import express from "express"
import authMiddleware from "../middlewares/auth.middleware.js"
import rateLimitMiddleware from "../middlewares/rateLimit.middleware.js"
import interviewcontroller from "../controllers/interviewcontroller.js"
import uploadResume from "../middlewares/file.middleware.js"

const interviewRouter = express.Router()

/**
 * @route POST /api/interview/
 * @description generate new interview report on the basis of user self description, resume and job description
 * @access Private
 */

interviewRouter.post(
  "/",
  authMiddleware.authUser,
  rateLimitMiddleware({ windowMs: 2 * 60 * 1000, maxRequests: 1 }),
  uploadResume.single("resume"),
  interviewcontroller.generateInterviewReportController
)

/**
 * @route GET /api/interview/report/
 * @description get all interview reports of logged in user 
 * @access Private
 */

interviewRouter.get("/report", authMiddleware.authUser, interviewcontroller.getAllInterviewReportController)

/**
 * @route GET /api/interview/report/:interviewId
 * @description get interview report on the basis of id from database
 * @access Private
 */

interviewRouter.get("/report/:interviewId", authMiddleware.authUser, interviewcontroller.getInterviewReportByIdController)

/**
 * @route GET /api/interview/report/:interviewId/pdf
 * @description Download interview report as PDF
 * @access Private
 */

interviewRouter.get("/report/:interviewId/pdf", authMiddleware.authUser, interviewcontroller.downloadInterviewReportPDFController)

export default interviewRouter