const PreparationTimeline = ({ preparationPlan = [] }) => {
  return (
    <div className="bg-[#181818] border border-zinc-800 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-8">7-Day Preparation Plan</h2>

      <div className="relative border-l-2 border-indigo-500 ml-4 space-y-8">
        {preparationPlan.map((day) => (
          <div key={day.day} className="relative pl-8">
            {/* Timeline Dot */}
            <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-indigo-600 border-4 border-[#181818]" />

            {/* Card */}
            <div className="bg-[#111111] border border-zinc-800 rounded-lg p-5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-semibold">Day {day.day}</h3>

                <span className="text-xs bg-indigo-600/20 text-indigo-400 px-3 py-1 rounded-full">
                  {day.focus}
                </span>
              </div>

              <ul className="mt-4 space-y-3">
                {day.tasks.map((task, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-zinc-300"
                  >
                    <span className="mt-2 w-2 h-2 rounded-full bg-indigo-500 shrink-0" />

                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {preparationPlan.length === 0 && (
        <p className="text-zinc-500 text-center py-8">
          No preparation plan available.
        </p>
      )}
    </div>
  );
};

export default PreparationTimeline;
