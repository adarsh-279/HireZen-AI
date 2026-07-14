import { CalendarDays } from "lucide-react";

const PreparationPlan = ({ preparationPlan }) => {
  return (
    <div className="bg-[#181818] border border-zinc-800 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <CalendarDays className="text-indigo-500" size={22} />
        <h2 className="text-xl font-semibold">7-Day Preparation Plan</h2>
      </div>

      <div className="space-y-5">
        {preparationPlan?.map((day) => (
          <div
            key={day.day}
            className="border border-zinc-700 rounded-lg p-5 bg-[#111111]"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-indigo-400">Day {day.day}</h3>

              <span className="text-sm text-zinc-400">{day.focus}</span>
            </div>

            <ul className="space-y-2 list-disc list-inside text-zinc-300">
              {day.tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreparationPlan;
