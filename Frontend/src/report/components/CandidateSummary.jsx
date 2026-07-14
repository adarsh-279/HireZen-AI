import { User, FileText } from "lucide-react";

const CandidateSummary = ({ report }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Self Description */}
      <div className="bg-[#181818] border border-zinc-800 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-11 h-11 rounded-lg bg-indigo-600/20 flex items-center justify-center">
            <User className="text-indigo-400" size={22} />
          </div>

          <div>
            <h2 className="text-lg font-semibold">Candidate Summary</h2>
            <p className="text-sm text-zinc-500">
              Self description submitted during analysis
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-zinc-800 bg-[#111] p-5">
          <p className="text-zinc-300 leading-7 whitespace-pre-line">
            {report.selfDescription}
          </p>
        </div>
      </div>

      {/* Resume */}
      <div className="bg-[#181818] border border-zinc-800 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-11 h-11 rounded-lg bg-green-600/20 flex items-center justify-center">
            <FileText className="text-green-400" size={22} />
          </div>

          <div>
            <h2 className="text-lg font-semibold">Resume</h2>
            <p className="text-sm text-zinc-500">
              Parsed resume used for AI analysis
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-zinc-800 bg-[#111] p-5 h-72 overflow-y-auto">
          <pre className="text-sm text-zinc-300 whitespace-pre-wrap font-sans leading-6">
            {report.resume}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CandidateSummary;
