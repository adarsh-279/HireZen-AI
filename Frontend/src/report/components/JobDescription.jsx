import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const JobDescription = ({ description }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-[#181818] border border-zinc-800 rounded-xl p-6">
      {/* Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-lg bg-indigo-600/20 flex items-center justify-center">
            <Briefcase className="text-indigo-400" size={22} />
          </div>

          <div className="text-left">
            <h2 className="text-xl font-semibold">Original Job Description</h2>

            <p className="text-sm text-zinc-500">
              The job description used to generate this interview report.
            </p>
          </div>
        </div>

        {expanded ? (
          <ChevronUp className="text-zinc-400" />
        ) : (
          <ChevronDown className="text-zinc-400" />
        )}
      </button>

      {/* Content */}
      {expanded && (
        <div className="mt-6 border-t border-zinc-800 pt-6">
          <div className="bg-[#111111] border border-zinc-700 rounded-lg p-5 max-h-[500px] overflow-y-auto">
            <pre className="whitespace-pre-wrap text-zinc-300 leading-7 font-sans">
              {description}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDescription;
