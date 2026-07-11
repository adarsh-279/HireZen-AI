import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true,
})

/**
 * @description generate a new AI interview report using the user's resume, self description, and job description
 */

export const generateInterviewReport = async ({ resumeFile, jobDescription, selfDescription }) => {
    const formData = new FormData()
    formData.append("resume", resumeFile)
    formData.append("jobDescription", jobDescription)
    formData.append("selfDescription", selfDescription)

    const response = await api.post("/api/interview", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })

    return response.data
}

/**
 * @description get all interview reports of the authenticated user
 */

export const getAllInterviewReport = async () => {
    const response = await api.get("/api/interview/report")

    return response.data
}

/**
 * @description get a specific interview report by its id
 */

export const getInterviewReportById = async (interviewId) => {
    const response = await api.get(`/api/interview/report/${interviewId}`)

    return response.data
}