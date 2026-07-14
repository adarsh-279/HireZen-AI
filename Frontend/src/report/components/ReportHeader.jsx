import { CalendarDays, FileText, Download } from "lucide-react";

const ReportHeader = ({ report, downloadReport }) => {
  return (
    <div className="bg-[#181818] border border-zinc-800 rounded-xl p-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        {/* Left */}
        <div>
          <p className="text-sm text-zinc-500">Interview Analysis Report</p>

          <h1 className="mt-2 text-3xl font-bold">{report.title}</h1>

          <div className="mt-5 flex flex-wrap gap-6 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <CalendarDays size={16} />
              {new Date(report.createdAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </div>

            <div className="flex items-center gap-2">
              <FileText size={16} />
              Report ID: {report._id}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col items-center gap-5">
          <div className="relative w-28 h-28 rounded-full bg-linear-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-[#181818] flex flex-col items-center justify-center">
              <span className="text-3xl font-bold">{report.matchScore}%</span>

              <span className="text-xs text-zinc-500 mt-1">Match</span>
            </div>
          </div>

          <button 
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 transition px-5 py-2 rounded-lg font-medium"
            onClick={() => downloadReport(report._id)}
          >
            <Download size={18} />
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportHeader;
