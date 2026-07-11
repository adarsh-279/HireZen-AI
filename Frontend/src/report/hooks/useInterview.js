import { useContext } from "react";
import {
  generateInterviewReport,
  getAllInterviewReport,
  getInterviewReportById,
} from "../services/interview.api.js";
import { InterviewContext } from "../services/Interview.context.jsx";

export const useInterview = () => {
  const context = useContext(InterviewContext);

  if (!context) {
    throw new Error("useInterview must be used inside InterviewProvider");
  }

  const { loading, setLoading, report, setReport, reports, setReports } =
    context;

  const generateReport = async ({
    resumeFile,
    jobDescription,
    selfDescription,
  }) => {
    setLoading(true);
    try {
      const response = await generateInterviewReport({
        resumeFile,
        jobDescription,
        selfDescription,
      });
      setReport(response.interviewReport);
      return response.interviewReport;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getAllReport = async () => {
    setLoading(true);
    try {
      const response = await getAllInterviewReport();
      setReports(response.interviewReport);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getReportById = async (interviewId) => {
    setLoading(true);
    try {
      const response = await getInterviewReportById(interviewId);
      setReport(response.interviewReport);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    report,
    reports,
    generateReport,
    getAllReport,
    getReportById,
  };
};
