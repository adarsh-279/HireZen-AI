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

interviewRouter.post("/", authMiddleware.authUser, uploadResume.single("resume"), interviewcontroller.generateInterviewReportController)

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

export default interviewRouter