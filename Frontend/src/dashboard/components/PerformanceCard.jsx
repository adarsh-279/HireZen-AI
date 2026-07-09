import { ArrowUpRight, Sparkles } from "lucide-react";
import CircularProgress from "./CircularProgress";

const PerformanceCard = () => {
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
        <CircularProgress value={82} />
      </div>

      <h2 className="font-semibold text-xl">Ready for Hire</h2>

      <p className="text-center text-gray-400 mt-3">
        You're in the top 15% of candidates for Backend roles this month.
      </p>

      <button className="mt-8 border border-gray-600 rounded-lg w-full py-3 flex justify-center gap-2 hover:bg-[#232323]">
        View Detailed Report
        <ArrowUpRight size={18} />
      </button>
    </div>
  );
};

export default PerformanceCard;
