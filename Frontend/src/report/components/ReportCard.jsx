import { CalendarDays, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const ReportCard = ({ report }) => {
  return (
    <Link
      to={`/reports/${report._id}`}
      className="block bg-[#181818] border border-zinc-800 rounded-xl p-6 hover:border-indigo-500 transition"
    >
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold text-white">{report.title}</h2>

          <p className="text-zinc-400 mt-2 line-clamp-2">
            {report.jobDescription}
          </p>
        </div>

        <div className="text-3xl font-bold text-green-400">
          {report.matchScore}%
        </div>
      </div>

      <div className="flex justify-between items-center mt-8">
        <div className="flex items-center gap-2 text-zinc-500 text-sm">
          <CalendarDays size={16} />
          {new Date(report.createdAt).toLocaleDateString()}
        </div>

        <div className="flex items-center gap-2 text-indigo-400">
          View Report
          <ChevronRight size={18} />
        </div>
      </div>
    </Link>
  );
};

export default ReportCard;
