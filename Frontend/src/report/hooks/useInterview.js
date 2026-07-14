import { useContext } from "react";
import { generateInterviewReport, getAllInterviewReport, getInterviewReportById, downloadInterviewReport } from "../services/interview.api.js";
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

  const downloadReport = async (interviewId) => {
    try {
      const response = await downloadInterviewReport(interviewId);

      const blob = new Blob([response.data], {
        type: "application/pdf",
      });

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = url;

      const disposition = response.headers["content-disposition"];

      let filename = "Interview_Report.pdf";

      if (disposition) {
        const match = disposition.match(/filename="?([^"]+)"?/);

        if (match) {
          filename = match[1];
        }
      }

      link.download = filename;

      document.body.appendChild(link);

      link.click();

      link.remove();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    loading,
    report,
    reports,
    generateReport,
    getAllReport,
    getReportById,
    downloadReport,
  };
};
