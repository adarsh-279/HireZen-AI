import { CircleGauge } from "lucide-react";

const ScoreCard = ({ title, value, color = "green" }) => {
  const colors = {
    green: "text-green-500 border-green-500",
    purple: "text-indigo-400 border-indigo-400",
    orange: "text-orange-400 border-orange-400",
  };

  return (
    <div className="bg-[#181818] rounded-xl border border-zinc-800 p-6">
      <div className="flex items-center gap-3">
        <CircleGauge className={colors[color].split(" ")[0]} size={22} />

        <h3 className="text-zinc-400 font-medium">{title}</h3>
      </div>

      <div className="mt-8 flex justify-center">
        <div
          className={`w-32 h-32 rounded-full border-[10px] flex items-center justify-center ${colors[color].split(" ")[1]}`}
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold">{value}</h2>

            <p className="text-zinc-500 text-sm">/100</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
