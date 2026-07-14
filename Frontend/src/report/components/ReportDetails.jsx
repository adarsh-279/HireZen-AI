import { useEffect } from "react";
import { useParams } from "react-router";

import Navbar from "../../ui/components/Navbar";
import Footer from "../../ui/components/Footer";

import ReportHeader from "../components/ReportHeader";
import CandidateSummary from "../components/CandidateSummary";
import TechnicalQuestions from "../components/TechnicalQuestions";
import BehavioralQuestions from "../components/BehavioralQuestions";
import SkillGapCard from "../components/SkillGapCard";
import PreparationTimeline from "../components/PreparationTimeline";
import JobDescription from "../components/JobDescription";

import { useInterview } from "../hooks/useInterview";

const ReportDetails = () => {
  const { id } = useParams();
  const { report, getReportById, loading, downloadReport } = useInterview();

  useEffect(() => {
    if (typeof getReportById === "function" && id) {
      getReportById(id);
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-12 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {loading && (
            <div className="text-center text-zinc-400">Loading report…</div>
          )}

          {!loading && !report && (
            <div className="text-center text-zinc-400">Report not found.</div>
          )}

          {!loading && report && (
            <>
              <ReportHeader report={report} downloadReport={downloadReport} />

              <CandidateSummary report={report} />

              <TechnicalQuestions questions={report.technicalQuestions} />

              <BehavioralQuestions questions={report.behavioralQuestions} />

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {report.skillGaps?.map((skill, index) => (
                  <SkillGapCard key={index} skill={skill} />
                ))}
              </div>

              <PreparationTimeline preparationPlan={report.preparationPlan || []} />

              <JobDescription description={report.jobDescription} />
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ReportDetails;
