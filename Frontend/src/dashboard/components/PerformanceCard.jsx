import { ArrowUpRight, Sparkles } from "lucide-react";
import CircularProgress from "./CircularProgress";
import { useNavigate } from "react-router";

const PerformanceCard = ({ reports = [] }) => {
  const navigate = useNavigate()

  const handleViewDetailedReport = () => {
    navigate(`/reports/${latestReport._id}`)
  }
  
  const latestReport = reports[0]
  return (
    <div className="bg-[#1A1A1A] border border-gray-700 rounded-2xl p-8 h-full flex flex-col items-center">
      <div className="self-start flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
          <Sparkles className="text-indigo-400" size={18} />
        </div>

        <p className="uppercase text-xs text-indigo-400 font-semibold">
          Overall Performance
        </p>
      </div>

      <div className="my-8">
        <CircularProgress value={latestReport?.matchScore || 0} />
      </div>

      <h2 className="font-semibold text-xl">
        {latestReport ? "Ready for Hire" : "No Report Available"}
      </h2>

      <p className="text-center text-gray-400 mt-3 leading-7 text-sm">
        {latestReport ? (
          <>
            Your latest interview analysis achieved a{" "}
            <span className="font-semibold text-white">
              {latestReport.matchScore}/100
            </span>{" "}
            match score. Keep refining your technical skills and interview
            preparation to improve your chances of landing your target role.
          </>
        ) : (
          <>
            Generate your first AI interview report to receive a personalized
            match score, technical interview questions, skill gap analysis, and
            a tailored preparation roadmap.
          </>
        )}
      </p>

      <button
        onClick={handleViewDetailedReport}
        className="mt-8 border border-gray-600 rounded-lg w-full py-3 flex justify-center gap-2 hover:bg-[#232323]"
      >
        View Detailed Report
        <ArrowUpRight size={18} />
      </button>
    </div>
  );
};

export default PerformanceCard;
