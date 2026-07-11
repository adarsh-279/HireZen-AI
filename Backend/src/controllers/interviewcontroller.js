import { PDFParse } from "pdf-parse"
import generateInterviewReport from "../services/ai.service.js"
import interviewReportModel from "../models/interviewReport.model.js"
import { get } from "mongoose";

/**
 * @description generate new interview report on the basis of user self description, resume and job description
 */

async function generateInterviewReportController(req, res) {

    const resumeContent = await (new PDFParse(Uint8Array.from(req.file.buffer))).getText();

    const { selfDescription, jobDescription } = req.body
    
    const interviewReportByAI = await generateInterviewReport ({
        resume: resumeContent.text,
        selfDescription,
        jobDescription
    })

    const interviewReport = await interviewReportModel.create({
        user: req.user.id,
        resume: resumeContent.text,
        selfDescription,
        jobDescription,
        ...interviewReportByAI
    })

    res.status(201).json({
        message: "Interview Report generated sucessfully",
        interviewReport
    })
}

/**
 * @description get all interview reports of logged in user from database
 */

async function getAllInterviewReportController(req, res) {
    const interviewReport = await interviewReportModel
        .find({ user: req.user.id })
        .sort({ createdAt: -1 })
        .select( "-resume -selfDescription -jobDescription -__v -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan -updatedAt")

    if (!interviewReport) {
        return res.status(404).json({
            message: "Interview reports not found"
        })
    }

    res.status(200).json({
        message: "Interview report fetched successfully",
        interviewReport
    })
}

/**
 * @description get interview report on the basis of id from database
 */

async function getInterviewReportByIdController(req, res) {
    const { interviewId } = req.params

    const interviewReport = await interviewReportModel.findOne({
        _id: interviewId,
        user: req.user.id
    })

    if (!interviewId) {
        return res.status(404).json({
            message: "Interview report not found"
        })
    }

    res.status(200).json({
        message: "Interview report fetched successfully",
        interviewReport
    })
}

export default {
    generateInterviewReportController,
    getAllInterviewReportController,
    getInterviewReportByIdController,
}