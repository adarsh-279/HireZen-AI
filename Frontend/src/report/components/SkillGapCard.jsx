const severityColors = {
  low: "bg-green-500/15 text-green-400 border-green-500/30",
  medium: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  high: "bg-red-500/15 text-red-400 border-red-500/30",
};

const SkillGapCard = ({ skill }) => {
  return (
    <div className="bg-[#181818] border border-zinc-800 rounded-xl p-5 hover:border-indigo-500/40 transition">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">{skill.skill}</h3>

        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold border capitalize ${
            severityColors[skill.severity]
          }`}
        >
          {skill.severity}
        </span>
      </div>

      <div className="mt-5">
        <div className="flex justify-between text-sm text-zinc-400 mb-2">
          <span>Priority</span>
          <span className="capitalize">{skill.severity}</span>
        </div>

        <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full ${
              skill.severity === "high"
                ? "w-full bg-red-500"
                : skill.severity === "medium"
                  ? "w-2/3 bg-yellow-500"
                  : "w-1/3 bg-green-500"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillGapCard;
