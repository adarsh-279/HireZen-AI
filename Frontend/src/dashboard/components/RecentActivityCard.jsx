import { Brain, CheckCircle, MessageSquare } from "lucide-react";
import ActivityItem from "./ActivityItem";

const RecentActivityCard = () => {
  return (
    <div className="bg-[#1A1A1A] border border-gray-700 rounded-2xl p-8">
      <div className="flex justify-between mb-6">
        <h2 className="font-semibold text-lg">Recent Activity</h2>

        <button className="text-xs text-indigo-400">VIEW ALL</button>
      </div>

      <div className="space-y-4">
        <ActivityItem
          icon={<Brain className="text-indigo-400" size={18} />}
          title="Technical Interview Simulation"
          subtitle="2 hours ago • Data Structures Track"
          score="88/100"
          status="EXCELLENT"
        />

        <ActivityItem
          icon={<CheckCircle className="text-green-400" size={18} />}
          title="Resume Optimization Scan"
          subtitle="Yesterday • Backend Engineer Role"
          score="76/100"
          status="GOOD"
        />

        <ActivityItem
          icon={<MessageSquare className="text-gray-400" size={18} />}
          title="Behavioral Practice"
          subtitle="3 days ago • Amazon Leadership Principles"
          score="92/100"
          status="MASTERY"
        />
      </div>
    </div>
  );
};

export default RecentActivityCard;
