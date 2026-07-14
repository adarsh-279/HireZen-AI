import { FileChartColumnIncreasing } from "lucide-react";
import ActivityItem from "./ActivityItem";
import { useNavigate } from "react-router";

const RecentActivityCard = ({ reports = [] }) => {
  const navigate = useNavigate()

  const handleReportViewAll = () => {
    navigate('/reports')
  }

  return (
    <div className="bg-[#1A1A1A] border border-gray-700 rounded-2xl p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-semibold text-lg">Recent Activity</h2>

        <button
          onClick={handleReportViewAll}
          className="text-xs text-indigo-400 hover:text-indigo-300 transition"
        >
          VIEW ALL
        </button>
      </div>

      <div className="space-y-4">
        {reports.length > 0 ? (
          reports.slice(0, 3).map((report) => (
            <ActivityItem
              key={report._id}
              icon={
                <FileChartColumnIncreasing
                  className="text-indigo-400"
                  size={18}
                />
              }
              title={
                report.title.length > 40
                  ? `${report.title.slice(0, 40)}...`
                  : report.title
              }
              subtitle={`${new Date(report.createdAt).toLocaleDateString(
                "en-IN",
                {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                },
              )} • ${
                report.jobDescription
                  ? report.jobDescription.length > 35
                    ? `${report.jobDescription.slice(0, 35)}...`
                    : report.jobDescription
                  : "Interview Report"
              }`}
              score={`${report.matchScore ?? 0}/100`}
              status={
                report.matchScore >= 85
                  ? "EXCELLENT"
                  : report.matchScore >= 70
                    ? "GOOD"
                    : "NEEDS IMPROVEMENT"
              }
            />
          ))
        ) : (
          <div className="flex items-center justify-center py-8">
            <p className="text-sm text-gray-400">No recent activity found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentActivityCard;
