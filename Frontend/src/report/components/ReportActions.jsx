import { Download, Share2, Trash2, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

const ReportActions = ({ onDownload, onShare, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#181818] border border-zinc-800 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-6">Report Actions</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <button
          onClick={onDownload}
          className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 transition rounded-lg py-3 font-medium"
        >
          <Download size={18} />
          Download PDF
        </button>

        <button
          onClick={onShare}
          className="flex items-center justify-center gap-2 bg-[#111] border border-zinc-700 hover:border-indigo-500 transition rounded-lg py-3"
        >
          <Share2 size={18} />
          Share
        </button>

        <button
          onClick={onDelete}
          className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 transition rounded-lg py-3"
        >
          <Trash2 size={18} />
          Delete
        </button>

        <button
          onClick={() => navigate("/reports")}
          className="flex items-center justify-center gap-2 bg-[#111] border border-zinc-700 hover:border-white transition rounded-lg py-3"
        >
          <ArrowLeft size={18} />
          Back
        </button>
      </div>
    </div>
  );
};

export default ReportActions;
