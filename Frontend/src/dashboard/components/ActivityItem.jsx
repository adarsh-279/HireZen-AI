const ActivityItem = ({ icon, title, subtitle, score, status }) => {
  return (
    <div className="bg-[#232323] rounded-xl p-4 flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <div className="w-10 h-10 rounded-lg bg-[#2D2D2D] flex items-center justify-center">
          {icon}
        </div>

        <div>
          <h3 className="font-medium">{title}</h3>

          <p className="text-sm text-gray-400">{subtitle}</p>
        </div>
      </div>

      <div className="text-right">
        <p className="font-semibold">{score}</p>

        <span className="text-xs text-green-400">{status}</span>
      </div>
    </div>
  );
};

export default ActivityItem;
